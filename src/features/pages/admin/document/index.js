import React from "react";
import { AdminDocumentQuickSearch } from "../../../../components/Form/AdminDocumentQuickSearch";
import { AdminDocumentItemList } from "../../../../container/SearchItemList/AdminDocumentItemList";

export const AdminDocument = () => {
  return (
    <div className="">
      <div className="mb-20">
        <AdminDocumentQuickSearch />
      </div>
      <div className="mb-20">
        <AdminDocumentItemList />
      </div>
    </div>
  );
};
