import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import Blogs from "./pages/Blogs";
import MainNav from "./shared/MainNav";
import SignOut from "./pages/auth/SignOut";

const App = () => {
  return (
    <div className="dark:text-white dark:bg-gray-900 h-screen ">
      <Router>
        <AuthProvider>
          <MainNav />
          <Routes>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/myblogs" element={<MyBlogs />} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
