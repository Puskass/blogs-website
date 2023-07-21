import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpForm from "./pages/auth/SignUp";
import SignInForm from "./pages/auth/SignIn";
import MyBlogs from "./pages/MyBlogs";
import Blogs from "./pages/Blogs";
import NotFound from "./pages/error/NotFound";
import Layout from "./components/Layout";
import RequireAuth from "./pages/auth/RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* public routes */}
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/signin" element={<SignInForm />} />

      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/blogs" element={<Blogs />} />
      </Route>

      {/* catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
