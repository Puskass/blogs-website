import Blogs from "../../pages/Blogs";
import Home from "../../pages/Home";
import MyBlogs from "../../pages/MyBlogs";
import SignIn from "../../pages/auth/SignIn";
import SignUp from "../../pages/auth/SignUp";

export const nav = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/myblogs",
    name: "My Blogs",
    element: <MyBlogs />,
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "/signin",
    name: "Sign In",
    element: <SignIn />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/signup",
    name: "Sign Up",
    element: <SignUp />,
    isMenu: true,
    isPrivate: false,
  },
];
