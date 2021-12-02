import React, { useState } from "react";
// import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/util/css_constant";
import { Button } from "../Button/Button";
import { vehicleData } from "../../assets/util/constant";
import { MyAxios } from "../../assets/util/api";

export const AdminAddViolationItem = () => {
  // const [readOnly, setReadOnly] = useState(true);
  const [success, setSuccess] = useState(null);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      vehicle: "",
    },
  });
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`container mx-auto p-8 lg:p-12 shadow-xl rounded-lg bg-white border-2 border-solid transition duration-100 ${
          success === 1
            ? "border-green-500"
            : success === 0
            ? "border-red-500"
            : "border-white"
        }`}
      >
        <div className="mb-8">
          <p className="mb-2">Tên vi phạm</p>
          <input
            type="text"
            {...register("name", { required: true })}
            className={input_normal}
          />
        </div>
        <div className="mb-8">
          <p className="mb-2">Phương tiện</p>
          <select
            {...register("vehicle", { required: true })}
            className={input_normal}
            defaultValue=""
          >
            <option value="" disabled hidden>
              {""}
            </option>

            {vehicleData.map((items) => (
              <option key={items.value} value={items.value}>
                {items.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-8">
          <p className="mb-2">Số tiền</p>
          <input
            type="number"
            {...register("amount", { required: true, valueAsNumber: true })}
            className={input_normal}
          />
        </div>

        <Button text={"Thêm mới"} type={"submit"} />
      </div>
    </form>
  );
};
