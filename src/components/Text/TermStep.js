import React from "react";

export const TermStep = ({ title, content }) => {
  return (
    <>
      <div className="w-full h-auto transition duration-300 shadow-xl hover:shadow-none rounded-lg p-8 col-span-1 flex flex-col justify-center">
        <p className="text-xl font-semibold mb-4">{title}</p>
        <p className="text-base">{content}</p>
      </div>
    </>
  );
};
