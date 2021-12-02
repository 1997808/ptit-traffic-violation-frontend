import React from "react";
import { AdminDocumentItemDetail } from "../../../../components/Form/AdminDocumentItemDetail";

export const AdminDocumentDetail = () => {
  const data = {
    id: "12345",
    licensePlate: "30A12345",
    amount: 140000,
    status: "Chưa nộp",
  };
  return (
    <div className="">
      <AdminDocumentItemDetail
        id={data.id}
        licensePlate={data.licensePlate}
        amount={data.amount}
        status={data.status}
      />
    </div>
  );
};
