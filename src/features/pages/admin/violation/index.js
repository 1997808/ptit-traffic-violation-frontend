import React, { useState, useEffect } from "react";
import { MyAxios } from "../../../../assets/util/api";
import { AdminViolationSearch } from "../../../../components/Form/AdminViolationSearch";
import { AdminViolationItemList } from "../../../../container/SearchItemList/AdminViolationItemList";

export const AdminViolation = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(0);
  useEffect(() => {
    const getAllViolation = async () => {
      await MyAxios.get("violation/getAllViolation.php")
        .then((res) => setData(res.data.data))
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    getAllViolation();
  }, [change]);
  return (
    <div className="">
      <div className="mb-20">
        <AdminViolationSearch />
      </div>
      <div className="">
        <AdminViolationItemList
          data={data}
          change={change}
          setChange={setChange}
        />
      </div>
    </div>
  );
};
