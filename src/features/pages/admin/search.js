import React from "react";
import { AdminQuickSearch } from "../../../components/Form/AdminQuickSearch";
import { AdminSearchItemList } from "../../../container/SearchItemList/AdminSearchItemList";

export const AdminSearch = () => {
  return (
    <div className="">
      <div className="mb-20">
        <AdminQuickSearch />
      </div>
      <div className="mb-20">
        <AdminSearchItemList />
      </div>
    </div>
  );
};
