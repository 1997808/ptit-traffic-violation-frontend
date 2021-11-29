import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Layout/Header";

export const AdminLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
