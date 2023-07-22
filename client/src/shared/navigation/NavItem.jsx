import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <div>
      <Link to={to}>{label}</Link>
    </div>
  );
};

export default NavItem;
