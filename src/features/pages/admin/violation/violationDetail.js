import React from "react";
import { AdminViolationItemDetail } from "../../../../components/Form/AdminViolationItemDetail";

export const AdminViolationDetail = () => {
  const data = {
    name: "Vượt đèn đỏ",
    vehicle: "Xe máy",
    amount: 140000,
  };
  return (
    <div className="">
      <AdminViolationItemDetail
        name={data.name}
        vehicle={data.vehicle}
        amount={data.amount}
      />
    </div>
  );
};
