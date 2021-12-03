import React, { useState } from "react";
import { AdvanceSearch } from "../../../components/Form/AdvanceSearch";
import { HelpCardList } from "../../../container/HelpCardList/HelpCardList";
import { SearchItemList } from "../../../container/SearchItemList/SearchItemList";
import { MyAxios } from "../../../assets/util/api";

export const ItemList = () => {
  const [data, setData] = useState([]);
  // const [change, setChange] = useState(0);
  const getAllDocument = async (search) => {
    await MyAxios.post("document/getAllDocument.php", search)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const onSubmit = async (search) => {
    getAllDocument(search);
  };

  return (
    <div className="w-full h-auto mt-20">
      <div className="pt-8 mb-20">
        <AdvanceSearch onSubmit={onSubmit} />
      </div>
      <div className="container mx-auto mb-10">
        <div className="mb-20">
          {data ? (
            <SearchItemList data={data} />
          ) : (
            <p className="text-red-500 text-center">
              Không tìm được kết quả phù hợp
            </p>
          )}
        </div>
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
