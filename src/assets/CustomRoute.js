import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  let location = useLocation();

  // if (!auth.admin) {
  if (auth.admin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export const AuthRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  let location = useLocation();

  // if (auth.admin) {
  if (!auth.admin) {
    return <Navigate to="/admin" state={{ from: location }} />;
  }

  return children;
};
