import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import app from "firebase/app";

import FirebaseConf from "../FirebaseConf";

export default function SingOut() {
  const auth = app.auth();
  const navigate = useHistory();
  const [userName, setUserName] = useState("");

  const SingOut = () => {
    auth.signOut().then(res => {
      localStorage.clear();
      navigate.push("/");
      window.location.reload();
    });
    console.log(localStorage.getItem("statusLog"));
  };

  auth.onAuthStateChanged(res => {
    setUserName(res.email.split("@")[0]);
  });

  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <NavLink to="/">See my List</NavLink>
      </li>
      <li>
        <NavLink to="/add">Add new project</NavLink>
      </li>
      <li onClick={SingOut}>SingOut</li>
      <li>
        <NavLink to="/perfil" className="btn btn-floating purple lighten-1">
          {userName}
        </NavLink>
      </li>
    </ul>
  );
}
