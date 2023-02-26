import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to={"/"} className="link">&#128579;</NavLink>
      <NavLink to={"/hands"} className="link">&#9996;</NavLink>
      <NavLink to={"/hearts"} className="link">&#128147;</NavLink>
    </nav>
  );
}

export default Navbar;
