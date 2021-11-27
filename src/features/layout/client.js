import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const ClientLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <div className="flex flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
