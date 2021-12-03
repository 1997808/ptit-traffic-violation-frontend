import React from "react";
import { AdminDocumentItem } from "../../components/SearchItem/AdminDocumentItem";

export const AdminDocumentItemList = ({ data, change, setChange }) => {
  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-left border-b border-solid border-gray-200">
            <th className="w-1/5 p-4">Lỗi vi phạm</th>
            <th className="w-1/5 p-4">Biển kiểm soát</th>
            <th className="w-1/5 p-4">Số tiền</th>
            <th className="w-1/5 p-4">Thanh toán</th>
            <th className="w-1/5 p-4"></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((items) => (
              <AdminDocumentItem
                key={items.id}
                id={items.id}
                name={items.name}
                licensePlate={items.licensePlate}
                amount={items.amount}
                status={items.status}
                change={change}
                setChange={setChange}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};
