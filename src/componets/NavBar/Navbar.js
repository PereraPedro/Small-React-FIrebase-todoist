import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingIn from "./SingIn";
import FirebaseConf from "./../FirebaseConf";
import app from "firebase/app";
import SingOut from "./SingOut";

export default function Navbar() {
  const auth = app.auth();

  auth.onAuthStateChanged(user => {
    localStorage.setItem("statusLog", user != null ? true : false);
  });

  return (
    <nav className="deep-purple accent-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          MyOwnProject
        </Link>
        {localStorage.getItem("statusLog") == "true" ? (
          <SingOut />
        ) : !localStorage.getItem("statusLog") == "true" ? (
          <SingIn />
        ) : (
          <SingIn />
        )}
      </div>
    </nav>
  );
}
