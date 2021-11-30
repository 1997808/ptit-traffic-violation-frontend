import React from "react";

export const OverviewCard = ({ title, data }) => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="border border-solid border-gray-300 p-4">
          <p className="text-base font-semibold">{title}</p>
        </div>
        <div className="border border-solid border-gray-300 p-4">
          <p className="text-base">{data}</p>
        </div>
      </div>
    </>
  );
};
