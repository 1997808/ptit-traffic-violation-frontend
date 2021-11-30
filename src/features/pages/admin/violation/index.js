import React from "react";
import { AdminViolationSearch } from "../../../../components/Form/AdminViolationSearch";
import { AdminViolationItemList } from "../../../../container/SearchItemList/AdminViolationItemList";

export const AdminViolation = () => {
  return (
    <div className="">
      <div className="mb-20">
        <AdminViolationSearch />
      </div>
      <div className="">
        <AdminViolationItemList />
      </div>
    </div>
  );
};
