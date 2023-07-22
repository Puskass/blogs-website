import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RenderNavigation } from "./shared/navigation/RenderNavigation";
import { RenderRoutes } from "./shared/navigation/RenderRoutes";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <RenderNavigation />
        <RenderRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;
