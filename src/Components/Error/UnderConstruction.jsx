import React from "react";
import { Link } from "react-router";

const UnderConstruction = ({ title = "This page is under construction." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-center px-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
        alt="Under Construction"
        className="w-32 h-32 mb-6 animate-bounce"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        🚧 Under Construction 🚧
      </h1>
      <p className="text-lg text-gray-600">{title}</p>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default UnderConstruction;
