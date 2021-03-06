import React from "react";
import { ButtonGradient } from "../Button/ButtonGradient";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/util/css_constant";

export const AdvanceSearch = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto p-8 lg:p-12 shadow-xl rounded-lg bg-white">
          <div className="text-lg lg:text-xl flex justify-center font-semibold pb-6">
            Tra cứu, nộp phạt quyết định xử phạt vi phạm
          </div>
          <div className="w-full h-auto flex justify-between items-center">
            <div className="grid grid-cols-2 gap-4 lg:gap-8 flex-grow pr-4 lg:pr-8">
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
            <div className="">
              <p className="mb-2 opacity-0">Null</p>
              <ButtonGradient text={"Tìm kiếm"} type="submit" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
