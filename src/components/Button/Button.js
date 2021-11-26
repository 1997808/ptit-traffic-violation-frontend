import React from "react";

export const Button = ({ text }) => {
  return (
    <>
      <button
        class="px-5 py-1 flex items-center justify-center border border-gray-500"
        type="button"
      >
        <p className="text-sm">{text}</p>
      </button>
    </>
  );
};
