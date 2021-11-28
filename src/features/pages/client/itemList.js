import React from "react";
import { AdvanceSearch } from "../../../components/AdvanceSearch/AdvanceSearch";
import { HelpCardList } from "../../../container/HelpCardList/HelpCardList";

export const ItemList = () => {
  return (
    <div className="w-full h-auto mt-20">
      <div className="pt-8 mb-20">
        <AdvanceSearch />
      </div>
      <div className="container mx-auto mb-20">
        <p className="text-sm text-gray-400">
          Tra cứu, nộp phạt quyết định xử phạt vi phạm hành chính trong lĩnh vực
          giao thông đường bộ:
        </p>
        <p className="text-sm text-gray-400">
          1. Thuộc thẩm quyền: Cục Cảnh sát giao thông, các đơn vị trực thuộc
          Cục Cảnh sát giao thông; Phòng Cảnh sát giao thông và các đơn vị
          đội/trạm thuộc Phòng Cảnh sát giao thông (theo danh sách Đội/Trạm)
        </p>
        <p className="text-sm text-gray-400">
          2. Thuộc thẩm quyền của thanh tra giao thông đường bộ.
        </p>
      </div>
      <div className="mb-20">
        <HelpCardList />
      </div>
    </div>
  );
};
