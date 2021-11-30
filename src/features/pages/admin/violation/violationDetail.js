import React from "react";
import { AdminSearchItemDetail } from "../../../../components/Form/AdminSearchItemDetail";

export const AdminViolationDetail = () => {
  const data = {
    id: "12345",
    licensePlate: "30A12345",
    amount: 140000,
    status: "Chưa nộp",
  };
  return (
    <div className="">
      <AdminSearchItemDetail
        id={data.id}
        licensePlate={data.licensePlate}
        amount={data.amount}
        status={data.status}
      />
    </div>
  );
};
