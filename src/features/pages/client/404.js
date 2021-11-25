import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className="">
      <p>404</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
