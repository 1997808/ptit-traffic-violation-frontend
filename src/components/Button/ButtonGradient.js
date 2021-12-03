import React from "react";

export const ButtonGradient = ({ text, type, onClick }) => {
  return (
    <>
      <button
        className="px-8 py-2 flex items-center justify-center bg-gradient-to-r text-white transition duration-300 bg-indigo-600 hover:bg-indigo-800"
        type={type}
        onClick={onClick ? onClick : () => {}}
      >
        <p className="text-sm lg:text-base">{text}</p>
      </button>
    </>
  );
};
