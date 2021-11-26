import React from "react";

export const Heading = ({ title, subtitle }) => {
  return (
    <>
      <p className="text-3xl">{title}</p>
      <p>{subtitle}</p>
    </>
  );
};
