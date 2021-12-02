import React from "react";
// import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/util/css_constant";
import { Button } from "../Button/Button";
import { vehicleData } from "../../assets/util/constant";

export const AdminAddDocumentItem = () => {
  // let { id } = useParams();
  // const [readOnly, setReadOnly] = useState(true);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      licensePlate: "",
      vehicle: "",
      violationId: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const violationData = [{ id: "123", name: "Vượt đèn đỏ" }];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto p-8 lg:p-12 shadow-xl rounded-lg bg-white">
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
          <p className="mb-2">Vi phạm</p>
          <select
            {...register("violationId", { required: true })}
            className={input_normal}
            defaultValue=""
          >
            <option value="" disabled hidden>
              {""}
            </option>

            {violationData.map((items) => (
              <option key={items.id} value={items.id}>
                {items.name}
              </option>
            ))}
          </select>
        </div>

        <Button text={"Thêm mới"} type={"submit"} />
      </div>
    </form>
  );
};
