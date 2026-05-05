import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-2 text-lg">Page not found</p>
          <Link
            to="/"
            className="mt-4inline-block rounded bg-primary px-4 py-2 text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
