import React from "react";
import { ButtonGradient } from "../Button/ButtonGradient";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/css_constant";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../app/reducers/auth";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mx-auto p-8 lg:p-12 shadow-xl rounded-lg bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full h-auto flex flex-col justify-between items-center">
            <div className="text-lg mb-6">Đăng nhập</div>
            <div className="flex-grow px-4 lg:px-8">
              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Username</p>
                <input
                  type="text"
                  placeholder="Username"
                  {...register("username", { required: true })}
                  className={input_normal}
                />
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold mb-2">Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className={input_normal}
                />
              </div>
            </div>
            <div onClick={() => dispatch(login())}>
              <ButtonGradient text={"Tìm kiếm"} type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
