import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = ({ message = "Page not found!" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">{message}</p>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorElement;
