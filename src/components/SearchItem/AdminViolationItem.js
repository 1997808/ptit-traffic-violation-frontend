import React from "react";
import { Td } from "../../assets/util/Td";
import { vndFormatter } from "../../assets/util/util";

export const AdminViolationItem = ({ id, name, amount, vehicle }) => {
  return (
    <tr
      key={id}
      className="border-b border-solid border-gray-200 hover:bg-white"
    >
      <Td to={`/admin/violation/${id}`}>{id}</Td>
      <Td to={`/admin/violation/${id}`}>{name}</Td>
      <Td to={`/admin/violation/${id}`}>{vndFormatter.format(amount)}</Td>
      <Td to={`/admin/violation/${id}`}>{vehicle}</Td>
    </tr>
  );
};
