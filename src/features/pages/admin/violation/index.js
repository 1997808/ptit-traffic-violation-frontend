import React, { useState, useEffect } from "react";
import { AdminViolationSearch } from "../../../../components/Form/AdminViolationSearch";
import { AdminViolationItemList } from "../../../../container/SearchItemList/AdminViolationItemList";
import { MyAxios } from "../../../../assets/util/api";

export const AdminViolation = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [change, setChange] = useState(0);

  useEffect(() => {
    const getAllViolation = async (search) => {
      await MyAxios.post("violation/getAllViolation.php", search)
        .then((res) => setData(res.data.data))
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    getAllViolation(search);
  }, [change, search]);

  return (
    <div className="">
      <div className="mb-12">
        <AdminViolationSearch setSearch={setSearch} />
      </div>
      <div className="mb-12">
        <AdminViolationItemList
          data={data}
          change={change}
          setChange={setChange}
        />
      </div>
    </div>
  );
};
