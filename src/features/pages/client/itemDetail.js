import React from "react";
import { useParams } from "react-router-dom";

export const ItemDetail = () => {
  let { itemId } = useParams();

  return (
    <div className="">
      <p>item detail {itemId}</p>
    </div>
  );
};
