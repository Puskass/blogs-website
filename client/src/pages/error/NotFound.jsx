import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
