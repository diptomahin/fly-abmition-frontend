import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">
        Welcome to Your Dashboard 🎉
      </h1>
      <p className="text-gray-600 max-w-lg">
        Use the menu on the left to manage your stories, add new ones, or head
        back to the home page. Get started by selecting an option!
      </p>
    </div>
  );
};

export default Welcome;
