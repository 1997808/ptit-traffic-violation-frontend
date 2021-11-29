import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  let location = useLocation();

  if (!auth.admin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
