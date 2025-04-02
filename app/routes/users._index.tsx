import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { UserInterface } from "~/types/user";

export const meta: MetaFunction = () => {
  return [
    { title: "Users" },
    { name: "description", content: "Landing page for users." },
  ];
};

export default function Users() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='font-semibold text-3xl py-2'> Users: </h1>
      <ul className='flex flex-col gap-2 py-2'>
        {users &&
          users.map((user, index) => (
            <li key={index}>
              <Link
                to={`/users/${user.id}`}
                className='text-yellow-600 flex items-center gap-2 underline underline-offset-4'
              >
                {user.name} <ArrowRight size={20} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
