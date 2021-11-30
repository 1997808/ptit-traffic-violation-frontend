import React from "react";
import { vndFormatter } from "../../assets/util";

export const AdminSearchItem = ({ id, licensePlate, amount, status }) => {
  return (
    <tr
      key={id}
      className="border-b border-solid border-gray-200 hover:bg-white"
    >
      <th className="text-sm p-4 truncate font-normal text-left">{id}</th>
      <th className="text-sm p-4 truncate font-normal text-left">
        {licensePlate}
      </th>
      <th className="text-sm p-4 truncate font-normal text-left">
        {vndFormatter.format(amount)}
      </th>
      <th className="text-sm p-4 truncate font-normal text-left">{status}</th>
    </tr>
  );
};
