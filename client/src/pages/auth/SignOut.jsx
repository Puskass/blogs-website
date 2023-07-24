import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const { authUser } = useAuth();

  const navigate = useNavigate()

  useEffect(() => {
    authUser(null);
    localStorage.clear()
    navigate("/")
  }, []);
  
  return <p>Signing Out...</p>;
};

export default SignOut;
