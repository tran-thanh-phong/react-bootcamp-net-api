import React from "react";
import { NavLink } from "react-router-dom";

function NavLinkCustom({route, text}) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-link active text-danger" : "nav-link"
      }
      aria-current="page"
      to={route}
    >
      {text}
    </NavLink>
  );
}

export default NavLinkCustom;
