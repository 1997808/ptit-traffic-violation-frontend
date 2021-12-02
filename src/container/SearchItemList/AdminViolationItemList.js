import React from "react";
import { AdminViolationItem } from "../../components/SearchItem/AdminViolationItem";

export const AdminViolationItemList = ({ data, change, setChange }) => {
  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-left border-b border-solid border-gray-200">
            <th className="w-1/5 p-4">Id</th>
            <th className="w-1/5 p-4">Tên</th>
            <th className="w-1/5 p-4">Số tiền</th>
            <th className="w-1/5 p-4">Phương tiện</th>
            <th className="w-1/5 p-4">Xóa</th>
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
                change={change}
                setChange={setChange}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};
