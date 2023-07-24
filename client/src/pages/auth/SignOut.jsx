import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const SignOut = () => {
  const { authUser } = useAuth();
  useEffect(() => {
    authUser(null);
  }, []);
  
  return <p>Signing Out...</p>;
};

export default SignOut;
