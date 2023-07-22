import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RenderNavigation } from "./shared/navigation/RenderNavigation";
import { RenderRoutes } from "./shared/navigation/RenderRoutes";

const App = () => {
  return (
    <div className="dark:text-white dark:bg-gray-900 h-screen ">
      <Router>
        <AuthProvider>
          <RenderNavigation />
          <RenderRoutes />
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
