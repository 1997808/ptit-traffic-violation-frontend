import React, { useEffect } from "react";
// import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/util/css_constant";
import { Button } from "../Button/Button";
import { MyAxios } from "../../assets/util/api";

export const AdminDocumentItemDetail = ({
  id,
  licensePlate,
  violationId,
  vehicle,
  status,
  violationData,
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: "",
      licensePlate: "",
      violationId: 0,
      status: "",
    },
  });
  useEffect(() => {
    reset({ id, licensePlate, violationId, status });
  }, [reset, id, licensePlate, violationId, status]);
  const onSubmit = async (data) => {
    await MyAxios.put(`document/updateDocument.php`, {
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
          <p className="mb-2">Số quyết định</p>
          <input
            type="text"
            {...register("id", { required: true })}
            className={input_normal}
          />
        </div>
        <div className="mb-8">
          <p className="mb-2">Biển kiểm soát</p>
          <input
            type="text"
            {...register("licensePlate", { required: true })}
            className={input_normal}
          />
        </div>
        {/* <div className="mb-8">
          <p className="mb-2">Số tiền</p>
          <input
            type="number"
            {...register("amount", { required: true })}
            className={input_normal}
          />
        </div> */}
        <div className="mb-8">
          <p className="mb-2">Vi phạm</p>
          <select
            {...register("violationId", { required: true })}
            className={input_normal}
          >
            {violationData
              .filter((items) => items.vehicle === vehicle)
              .map((items) => (
                <option key={items.id} value={items.id}>
                  {items.id + " " + items.name}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-8">
          <p className="mb-2">Trạng thái</p>
          <input
            type="text"
            {...register("status", { required: true })}
            className={input_normal}
            readOnly={true}
          />
        </div>

        <Button text={"Lưu dữ liệu"} type={"submit"} />
      </div>
    </form>
  );
};
