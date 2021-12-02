import React from "react";
import { Td } from "../../assets/util/Td";
import { vndFormatter } from "../../assets/util/util";

export const AdminSearchItem = ({ id, licensePlate, amount, status }) => {
  return (
    <tr
      key={id}
      className="border-b border-solid border-gray-200 hover:bg-white"
    >
      <Td to={`/admin/item/${id}`}>{id}</Td>
      <Td to={`/admin/item/${id}`}>{licensePlate}</Td>
      <Td to={`/admin/item/${id}`}>{vndFormatter.format(amount)}</Td>
      <Td to={`/admin/item/${id}`}>{status}</Td>
    </tr>
  );
};
