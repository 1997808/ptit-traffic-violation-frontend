import React, { useEffect } from "react";
// import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/css_constant";
import { Button } from "../Button/Button";

export const AdminSearchItemDetail = ({ id, licensePlate, amount, status }) => {
  // let { itemId } = useParams();
  // const [readOnly, setReadOnly] = useState(true);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: "",
      licensePlate: "",
      amount: 0,
      status: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    reset({ id, licensePlate, amount, status });
  }, [reset, id, licensePlate, amount, status]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto p-8 lg:p-12 shadow-xl rounded-lg bg-white">
        <div className="mb-8">
          <p className="mb-2">Số quyết định</p>
          <input
            type="text"
            placeholder="nhập số quyết định"
            {...register("id", { required: true })}
            className={input_normal}
          />
        </div>
        <div className="mb-8">
          <p className="mb-2">Biển kiểm soát</p>
          <input
            type="text"
            placeholder="biển số"
            {...register("licensePlate", { required: true })}
            className={input_normal}
          />
        </div>
        <div className="mb-8">
          <p className="mb-2">Số tiền</p>
          <input
            type="number"
            placeholder=""
            {...register("amount", { required: true })}
            className={input_normal}
          />
        </div>
        <div className="mb-8">
          <p className="mb-2">Trạng thái</p>
          <input
            type="text"
            placeholder=""
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
