import React from "react";
import { SearchItem } from "../../components/SearchItem/SearchItem";

export const SearchItemList = ({ data }) => {
  return (
    <>
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-left border-b border-solid border-gray-200">
            <th className="w-1/5 p-4">Lỗi vi phạm</th>
            <th className="w-1/5 p-4">Biển kiểm soát</th>
            <th className="w-1/5 p-4">Số tiền</th>
            <th className="w-1/5 p-4">Trạng thái</th>
            <th className="w-1/5 p-4">Ngày vi phạm</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((items) => (
              <SearchItem
                key={items.id}
                id={items.id}
                name={items.name}
                licensePlate={items.licensePlate}
                amount={items.amount}
                status={items.status}
                createAt={items.createAt}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};
