import React from "react";
import { useAuth } from "../../context/AuthContext";
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
      href: "/signout",
    },
  ]
    .filter((link) => link)
    .map(({ label, href }) => {
      return (
        <NavLink
          to={href}
          key={href}
          className="font-bold dark:text-white hover:text-blue-600"
        >
          <li>{label}</li>
        </NavLink>
      );
    });

  return (
    <ul className="max-w-2xl mx-auto flex justify-evenly py-4">{links}</ul>
  );
};

export default NavLinks;
