import React, { useState, useEffect } from "react";
import { AdminViolationItemDetail } from "../../../../components/Form/AdminViolationItemDetail";
import { MyAxios } from "../../../../assets/util/api";
import { useParams } from "react-router";
import { useLocation, Navigate } from "react-router-dom";

export const AdminViolationDetail = () => {
  let { id } = useParams();
  let location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const getAllViolation = async () => {
      await MyAxios.get(`violation/getOneViolation.php?id=${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    getAllViolation();
  }, [id]);

  if (data !== "") {
    return (
      <div className="">
        <AdminViolationItemDetail
          name={data.name}
          vehicle={data.vehicle}
          amount={data.amount}
        />
      </div>
    );
  } else {
    return <Navigate to="/admin/violation" state={{ from: location }} />;
  }
};
