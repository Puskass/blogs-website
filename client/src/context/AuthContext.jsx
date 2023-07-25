import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    !localStorage.getItem("token") ? null : localStorage.getItem("token")
  );

  const authUser = (token) => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken !== token) {
      localStorage.setItem("token", token);
    }
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext in any component
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
