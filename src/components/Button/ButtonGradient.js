import React from "react";

export const ButtonGradient = ({ text, type }) => {
  return (
    <>
      <button
        className="px-8 py-2 flex items-center justify-center bg-gradient-to-r text-white from-purple-500 to-blue-700 hover:from-blue-700 hover:to-purple-500"
        type={type}
      >
        <p className="text-base">{text}</p>
      </button>
    </>
  );
};
