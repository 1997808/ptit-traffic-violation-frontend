import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import { logOut } from "../../app/reducers/auth";
import { DashBtn } from "../Text/DashBtn";

export const SideBar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const usePathname = () => {
    let location = useLocation();
    return location.pathname;
  };

  const pathNow = usePathname();

  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="fixed w-64 h-screen z-10 p-8">
        <h1 className="text-lg font-bold py-4">Dashboard</h1>
        <hr className="my-4 md:min-w-full"></hr>
        <DashBtn name="Tổng quan" link="admin" pathNow={pathNow} />
        <DashBtn name="Tìm kiếm" link="admin/item" pathNow={pathNow} />
        <DashBtn
          name="Thêm quyết định"
          link="admin/item/add"
          pathNow={pathNow}
        />
        <DashBtn
          name="Danh sách vi phạm"
          link="admin/violation"
          pathNow={pathNow}
        />
        <DashBtn
          name="Thêm vi phạm"
          link="admin/violation/add"
          pathNow={pathNow}
        />
        <hr className="my-4 md:min-w-full"></hr>
        <DashBtn name="User" link="admin/user" pathNow={pathNow} />
        <DashBtn name="Thêm User" link="admin/user/add" pathNow={pathNow} />
        <div onClick={() => logoutHandler()}>
          <DashBtn name="Đăng xuất" pathNow={pathNow} />
        </div>
      </div>
    </>
  );
};
