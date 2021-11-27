import React from "react";

export const Button = ({ text }) => {
  return (
    <>
      <button
        className="px-8 py-2 flex items-center justify-center border border-gray-300 hover:bg-gradient-to-r hover:text-white hover:border-white from-purple-500 to-blue-700"
        type="button"
      >
        <p className="text-base">{text}</p>
      </button>
    </>
  );
};
