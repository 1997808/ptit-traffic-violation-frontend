import React, { useState } from "react";
import { AdminAddViolationItem } from "../../../../components/Form/AdminAddViolationItem";
import { MyAxios } from "../../../../assets/util/api";

export const AdminAddViolation = () => {
  const [success, setSuccess] = useState(null);
  const onSubmit = async (data) => {
    await MyAxios.put(`violation/createViolation.php`, data)
      .then((res) => {
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
      <AdminAddViolationItem success={success} onSubmit={onSubmit} />
    </div>
  );
};
