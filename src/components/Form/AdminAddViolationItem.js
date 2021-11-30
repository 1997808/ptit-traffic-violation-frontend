import React from "react";
// import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/css_constant";
import { Button } from "../Button/Button";
import { vehicleData } from "../../assets/constant";

export const AdminAddViolationItem = () => {
  // let { id } = useParams();
  // const [readOnly, setReadOnly] = useState(true);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      vehicle: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
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
            {...register("amount", { required: true })}
            className={input_normal}
          />
        </div>

        <Button text={"Thêm mới"} type={"submit"} />
      </div>
    </form>
  );
};
