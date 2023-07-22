import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const signOut = () => {
    // Clear the token from context and localStorage
    setToken(null);
    localStorage.removeItem("token");
  };

  console.log("Token:", token);

  return (
    <AuthContext.Provider value={{ token, setToken, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext in any component
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
