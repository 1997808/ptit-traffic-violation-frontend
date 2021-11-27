import React from "react";

export const Button = ({ text }) => {
  return (
    <>
      <button
        className="px-8 py-2 flex items-center justify-center border border-gray-300 transition duration-300 hover:bg-indigo-700 hover:text-white hover:border-white"
        type="button"
      >
        <p className="text-sm lg:text-base">{text}</p>
      </button>
    </>
  );
};
