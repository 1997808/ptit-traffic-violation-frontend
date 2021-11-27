import React from "react";
import { ButtonGradient } from "../Button/ButtonGradient";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/css_constant";

export const QuickSearch = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto p-8 lg:p-12 shadow-xl rounded-lg bg-white">
          <div className="w-full h-auto flex justify-between items-center">
            <div className="text-lg">Tra cứu nhanh</div>
            <div className="grid grid-cols-3 gap-4 flex-grow px-4 lg:px-8">
              <div className="col-span-1">
                <p className="mb-2">Số quyết định</p>
                <input
                  type="text"
                  placeholder="nhập số quyết định"
                  {...register("id", { required: true })}
                  className={input_normal}
                />
              </div>
              <div className="col-span-1">
                <p className="mb-2">Biển kiểm soát</p>
                <input
                  type="text"
                  placeholder="VD: 30A12345"
                  {...register("licensePlate", { required: true })}
                  className={input_normal}
                />
              </div>
              <div className="col-span-1">
                <p className="mb-2">Loại phương tiện</p>
                <select
                  {...register("vehicle", { required: true })}
                  className={input_normal}
                >
                  <option value="oTo">Ô tô</option>
                  <option value="xeMay">Xe máy</option>
                  <option value="xeDien">Xe điện</option>
                </select>
              </div>
            </div>
            <ButtonGradient text={"Tìm kiếm"} type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};
