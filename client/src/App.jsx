import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/auth/SignUp";
import SignInForm from "./pages/auth/SignIn";
import MyBlogs from "./pages/MyBlogs";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/error/NotFound";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
