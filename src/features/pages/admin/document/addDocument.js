import React, { useState, useEffect } from "react";
import { AdminAddDocumentItem } from "../../../../components/Form/AdminAddDocumentItem";
import { MyAxios } from "../../../../assets/util/api";

export const AdminAddDocument = () => {
  const [success, setSuccess] = useState(null);
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

  const onSubmit = async (data) => {
    await MyAxios.post(`document/createDocument.php`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setSuccess(1);
        } else {
          setSuccess(0);
        }
        setTimeout(() => setSuccess(null), 200);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  return (
    <div className="">
      <AdminAddDocumentItem
        success={success}
        onSubmit={onSubmit}
        violationData={violationData}
      />
    </div>
  );
};
