import React from "react";

export const Header = ({ title }) => {
  return (
    <>
      <h1>Header</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">
          Left
        </button>
        <button type="button" className="btn btn-primary">
          Middle
        </button>
        <button type="button" className="btn btn-primary">
          Right
        </button>
      </div>
    </>
  );
};
