import React, { useState, useEffect } from "react";
import { AdminDocumentItemDetail } from "../../../../components/Form/AdminDocumentItemDetail";
import { MyAxios } from "../../../../assets/util/api";
import { useParams } from "react-router";
import { useLocation, Navigate } from "react-router-dom";

export const AdminDocumentDetail = () => {
  let { id } = useParams();
  let location = useLocation();
  const [data, setData] = useState({});
  const [violationData, setViolationData] = useState([]);

  useEffect(() => {
    const getAllViolation = async () => {
      await MyAxios.post("violation/getAllViolation.php")
        .then((res) => setViolationData(res.data.data))
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    getAllViolation();
  }, []);

  useEffect(() => {
    const getAllDocument = async () => {
      await MyAxios.get(`document/getOneDocument.php?id=${id}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    };
    getAllDocument();
  }, [id]);

  if (data !== "") {
    return (
      <div className="">
        <AdminDocumentItemDetail
          id={data.id}
          licensePlate={data.licensePlate}
          violationId={data.violationId}
          vehicle={data.vehicle}
          // amount={data.amount}
          status={data.status}
          violationData={violationData}
        />
      </div>
    );
  } else {
    return <Navigate to="/admin/document" state={{ from: location }} />;
  }
};
