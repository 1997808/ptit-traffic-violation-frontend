import React, { useEffect } from "react";
// import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/util/css_constant";
import { vehicleData } from "../../assets/util/constant";
import { Button } from "../Button/Button";
import { MyAxios } from "../../assets/util/api";
import { useParams } from "react-router";

export const AdminViolationItemDetail = ({ name, vehicle, amount }) => {
  let { id } = useParams();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      vehicle: "",
      amount: 0,
    },
  });
  useEffect(() => {
    reset({ name, vehicle, amount });
  }, [reset, name, vehicle, amount]);

  const onSubmit = async (data) => {
    await MyAxios.put(`violation/updateViolation.php`, {
      ...data,
      id: parseInt(id, 10),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

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
            {...register("amount", { required: true, valueAsNumber: true })}
            className={input_normal}
          />
        </div>

        <Button text={"Lưu dữ liệu"} type={"submit"} />
      </div>
    </form>
  );
};
