import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight } from "react-feather";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App" },
    { name: "description", content: "Trying out Remix framework!" },
  ];
};

export default function Index() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <h1 className='font-semibold text-3xl py-2'> Remix tryout </h1>
      <div className='py-2'>
        <Link
          to={"/users"}
          className='text-yellow-600 flex items-center gap-2 underline underline-offset-4'
        >
          Users page <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
