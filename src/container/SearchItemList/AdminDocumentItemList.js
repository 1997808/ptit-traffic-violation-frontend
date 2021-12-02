import React from "react";
import { AdminDocumentItem } from "../../components/SearchItem/AdminDocumentItem";

export const AdminDocumentItemList = () => {
  const data = [
    {
      id: "12345",
      licensePlate: "30A12345",
      amount: 140000,
      status: "Chưa nộp",
    },
  ];
  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-left border-b border-solid border-gray-200">
            <th className="w-1/4 p-4">Số quyết định</th>
            <th className="w-1/4 p-4">Biển kiểm soát</th>
            <th className="w-1/4 p-4">Số tiền</th>
            <th className="w-1/4 p-4">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((items) => (
              <AdminDocumentItem
                key={items.id}
                id={items.id}
                licensePlate={items.licensePlate}
                amount={items.amount}
                status={items.status}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};
