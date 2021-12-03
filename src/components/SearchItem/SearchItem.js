import React from "react";
import { Td } from "../../assets/util/Td";
import { vndFormatter, statusFormatter } from "../../assets/util/util";

export const SearchItem = ({
  id,
  name,
  licensePlate,
  amount,
  status,
  createAt,
}) => {
  return (
    <tr
      key={id}
      className={`border-b border-solid border-gray-200 transition duration-300 ${
        status === "paid" ? "bg-green-100" : "bg-white"
      } hover:bg-white`}
    >
      <Td>{name}</Td>
      <Td>{licensePlate}</Td>
      <Td>{vndFormatter.format(amount)}</Td>
      <Td>{statusFormatter(status)}</Td>
      <Td>{createAt}</Td>
    </tr>
  );
};
