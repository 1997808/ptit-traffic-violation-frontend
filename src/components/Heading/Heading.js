import React from "react";

export const Heading = ({ title, subtitle }) => {
  return (
    <>
      <p className="text-2xl lg:text-3xl font-semibold">{title}</p>
      <p className="text-sm">{subtitle}</p>
    </>
  );
};
