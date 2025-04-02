import { LoaderFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import { UserInterface } from "~/types/user";

export let loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Response("Failed to fetch user", { status: 500 });
  }

  const user: UserInterface = await response.json();

  if (!user) {
    throw new Response("User not found", { status: 404 });
  }

  return json(user);
};

export default function Users() {
  const user = useLoaderData<UserInterface>();

  return (
    <div className='flex items-center justify-center flex-col'>
      <div>
        <h1 className='font-semibold text-3xl py-2'> Users: </h1>
        <div>
          <h2>{user.name}</h2>
          <p className='flex items-center gap-2'>
            Website:{" "}
            <Link
              to={`mailto:${user.email}`}
              className='text-yellow-600 flex items-center gap-2 underline underline-offset-4'
            >
              Email: {user.email}
            </Link>
          </p>
          <ul>
            <li>
              City: <span className='text-gray-400'> {user.address.city},</span>
            </li>
            <li>
              Street:{" "}
              <span className='text-gray-400'> {user.address.street}, </span>
            </li>
            <li>
              Zipcode:{" "}
              <span className='text-gray-400'> {user.address.zipcode}</span>
            </li>
          </ul>
          <p className='flex items-center gap-2'>
            Website:{" "}
            <Link
              to={`https://${user.website}`}
              className='text-yellow-600 flex items-center gap-2 underline underline-offset-4'
            >
              {user.website}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
