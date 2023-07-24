import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainNav from "./shared/layout/MainNav";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import SignOut from "./pages/auth/SignOut";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import MyBlogs from "./pages/MyBlogs";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <div className="dark:text-white dark:bg-gray-900 h-screen ">
      <Router>
        <AuthProvider>
          <MainNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<SignOut />} />
            {/* Use ProtectedRoute */}
            <Route
              path="/blogs"
              element={
                <PrivateRoute>
                  <Blogs />
                </PrivateRoute>
              }
            />
            <Route
              path="/myblogs"
              element={
                <PrivateRoute>
                  <MyBlogs />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
