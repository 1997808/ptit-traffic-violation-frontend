import React, { useState, useEffect } from "react";
import { AdminDocumentQuickSearch } from "../../../../components/Form/AdminDocumentQuickSearch";
import { AdminDocumentItemList } from "../../../../container/SearchItemList/AdminDocumentItemList";
import { MyAxios } from "../../../../assets/util/api";

export const AdminDocument = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [change, setChange] = useState(0);

  useEffect(() => {
    const getAllDocument = async (search) => {
      await MyAxios.post("document/getAllDocument.php", search)
        .then((res) => {
          console.log(res.data.data[0]);
          setData(res.data.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    getAllDocument(search);
  }, [change, search]);

  return (
    <div className="">
      <div className="mb-20">
        <AdminDocumentQuickSearch setSearch={setSearch} />
      </div>
      <div className="mb-20">
        <AdminDocumentItemList
          data={data}
          change={change}
          setChange={setChange}
        />
      </div>
    </div>
  );
};
