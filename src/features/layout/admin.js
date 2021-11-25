import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};

export default AdminLayout;