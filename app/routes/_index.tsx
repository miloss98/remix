import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App" },
    { name: "description", content: "Trying out Remix framework!" },
  ];
};

export default function Index() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1> Remix tryout </h1>
      <Link to={"/users"}> Users page</Link>
    </div>
  );
}
