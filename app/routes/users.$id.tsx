import { LoaderFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
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

  console.log(user);

  return (
    <div>
      <h1>User Details</h1>
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>
          User: {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
      </div>
    </div>
  );
}
