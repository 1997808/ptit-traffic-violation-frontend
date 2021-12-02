import React, { useState } from "react";
// import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/util/css_constant";
import { Button } from "../Button/Button";
import { vehicleData } from "../../assets/util/constant";

export const AdminAddDocumentItem = ({ success, onSubmit, violationData }) => {
  // let { id } = useParams();
  // const [readOnly, setReadOnly] = useState(true);
  const [vehicle, setVehicle] = useState();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      licensePlate: "",
      violationId: "",
    },
  });
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

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
          <p className="mb-2">Biển kiểm soát</p>
          <input
            type="text"
            {...register("licensePlate", { required: true })}
            className={input_normal}
          />
        </div>
        <div className="mb-8">
          <p className="mb-2">Phương tiện</p>
          <select
            // {...register("vehicle", { required: true })}
            className={input_normal}
            defaultValue=""
            onChange={(e) => setVehicle(e.target.value)}
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
          <p className="mb-2">Vi phạm</p>
          <select
            {...register("violationId", { required: true })}
            className={input_normal}
            defaultValue=""
          >
            <option value="" disabled hidden>
              {""}
            </option>
            {violationData
              .filter((items) => items.vehicle === vehicle)
              .map((items) => (
                <option key={items.id} value={items.id}>
                  {items.id + " " + items.name}
                </option>
              ))}
          </select>
        </div>

        <Button text={"Thêm mới"} type={"submit"} />
      </div>
    </form>
  );
};
