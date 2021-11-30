import React from "react";
import { AdminViolationItem } from "../../components/SearchItem/AdminViolationItem";

export const AdminViolationItemList = () => {
  const data = [
    {
      id: "12345",
      name: "Vượt đèn đỏ",
      amount: 140000,
      vehicle: "Ô tô",
    },
  ];
  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-left border-b border-solid border-gray-200">
            <th className="w-1/4 p-4">Id</th>
            <th className="w-1/4 p-4">Tên</th>
            <th className="w-1/4 p-4">Số tiền</th>
            <th className="w-1/4 p-4">Phương tiện</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((items) => (
              <AdminViolationItem
                key={items.id}
                id={items.id}
                name={items.name}
                amount={items.amount}
                vehicle={items.vehicle}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};
