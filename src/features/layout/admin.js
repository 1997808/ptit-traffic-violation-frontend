import React from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "../../components/Layout/SideBar";

export const AdminLayout = () => {
  return (
    <>
      <SideBar />
      <div className="md:ml-64 bg-gray-50 min-h-screen p-8">
        <Outlet />
      </div>
    </>
  );
};
