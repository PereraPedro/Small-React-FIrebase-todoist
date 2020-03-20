import React from "react";
import { NavLink } from "react-router-dom";

export default function SingIn() {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <NavLink to="/login">SingIn</NavLink>
      </li>
    </ul>
  );
}
