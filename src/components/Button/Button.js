import React from "react";

export const Button = ({ text, type, onClick, disabled }) => {
  return (
    <>
      <button
        className={`px-8 py-2 flex items-center justify-center border ${
          disabled
            ? "bg-gray-50 cursor-default"
            : "bg-white border-gray-300 transition duration-300 hover:bg-indigo-700 hover:text-white hover:border-white"
        }`}
        type={type}
        onClick={onClick ? onClick : () => {}}
        disabled={disabled}
      >
        <p className="text-sm lg:text-base">{text}</p>
      </button>
    </>
  );
};
