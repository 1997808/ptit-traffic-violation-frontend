import React from "react";

export const ButtonDelete = ({ text, type, onClick }) => {
  return (
    <>
      <button
        className="px-8 py-2 flex items-center justify-center bg-red-500 transition duration-300 hover:bg-red-700 text-white"
        type={type}
        onClick={onClick ? onClick : () => {}}
      >
        <p className="text-sm lg:text-base">{text}</p>
      </button>
    </>
  );
};
