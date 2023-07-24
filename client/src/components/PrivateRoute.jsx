import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();

  return token ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
