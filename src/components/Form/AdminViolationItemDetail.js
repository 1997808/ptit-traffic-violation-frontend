import React, { useEffect } from "react";
// import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/util/css_constant";
import { vehicleData } from "../../assets/util/constant";
import { Button } from "../Button/Button";

export const AdminViolationItemDetail = ({ name, vehicle, amount }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      vehicle: "",
      amount: 0,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    reset({ name, vehicle, amount });
  }, [reset, name, vehicle, amount]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto p-8 lg:p-12 shadow-xl rounded-lg bg-white">
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
            {...register("amount", { required: true })}
            className={input_normal}
          />
        </div>

        <Button text={"Lưu dữ liệu"} type={"submit"} />
      </div>
    </form>
  );
};
