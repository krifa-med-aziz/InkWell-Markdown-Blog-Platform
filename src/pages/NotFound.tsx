import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[500px] flex flex-col gap-6 justify-center items-center">
      <h1 className="uppercase text-black text-3xl font-bold">
        404 - Page Not FOund
      </h1>
      <p className="text-center text-gray-500 text-2xl w-[90%] lg:w-[50%]">
        The page you are looking for might have been removed had it's name
        changed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="uppercase bg-blue-500 text-white px-8 py-3 rounded-2xl font-bold hover:opacity-80"
      >
        Go to HomePage
      </Link>
    </div>
  );
}
