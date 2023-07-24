import React from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const { token } = useAuth();

  const links = [
    {
      label: "Home",
      href: "/",
    },

    token && {
      label: "Blogs",
      href: "/blogs",
    },

    token && {
      label: "My blogs",
      href: "/myblogs",
    },

    !token && {
      label: "Sign In",
      href: "/signin",
    },

    !token && {
      label: "Sign Up",
      href: "/signup",
    },
    token && {
        label: "Sign Out",
        href: "/signout"
    }
  ]
    .filter((link) => link)
    .map(({ label, href }) => {
      return (
        <NavLink to={href} key={href}>
          <li>{label}</li>
        </NavLink>
      );
    });

  return <ul>{links}</ul>;
};

export default NavLinks;
