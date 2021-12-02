import React from "react";
import { Td } from "../../assets/util/Td";
import { vndFormatter } from "../../assets/util/util";

export const SearchItem = ({ id, licensePlate, amount, status }) => {
  return (
    <tr
      key={id}
      className="border-b border-solid border-gray-200 hover:bg-white"
    >
      <Td>{id}</Td>
      <Td>{licensePlate}</Td>
      <Td>{vndFormatter.format(amount)}</Td>
      <Td>{status}</Td>
    </tr>
  );
};
