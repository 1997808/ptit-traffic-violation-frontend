import React from "react";
import { ButtonGradient } from "../Button/ButtonGradient";
import { useForm } from "react-hook-form";
import { input_normal } from "../../assets/util/css_constant";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../app/reducers/auth";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(login());
    if (data) {
      navigate("../admin", { replace: true });
    }
  };

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
            <ButtonGradient text={"Tìm kiếm"} type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

// const onSubmit = async (data) => {
//   const loginHandler = await MyAxios.post("/login", {
//     username: data.username,
//     password: data.password,
//   }).then((response) => {
//     if (response.data.message) {
//       alert(response.data.message);
//     } else {
//       if (response.data.role === "user") {
//         localStorage.setItem("token", response.data.token);
//         dispatch(setUserID(response.data.accountID));
//         dispatch(userAuth());
//         setTimeout(() => history.push("/"), 1000);
//       } else if (response.data.role === "admin") {
//         localStorage.setItem("token", response.data.token);
//         dispatch(adminAuth());
//         setTimeout(() => history.push("/admin"), 1000);
//       }
//     }
//   });

//   return loginHandler;
// };
