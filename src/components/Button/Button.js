import React from "react";

export const Button = ({ text }) => {
  return (
    <>
      <button
        class="px-6 py-1.5 flex items-center justify-center border border-gray-300 hover:bg-gradient-to-r hover:text-white hover:border-white from-purple-500 to-blue-700"
        type="button"
      >
        <p className="text-sm">{text}</p>
      </button>
    </>
  );
};
