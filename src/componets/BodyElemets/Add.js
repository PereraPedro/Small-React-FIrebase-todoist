import React, { useRef, useState } from "react";
import FirebaseConf from "../FirebaseConf";
import app, { auth } from "firebase/app";

export default function Add() {
  const bd = app.firestore();
  const auth = app.auth();
  const id = require("uniqid");
  const name = useRef("");
  const priority = useRef("");

  const addProject = () => {
    let idDoc = id();
    bd.collection("users/" + localStorage.getItem("userId") + "/projects/")
      .doc(idDoc)
      .set({
        id: idDoc,
        name: name.current.value,
        priority: priority.current.value
      });
  };

  return (
    <>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <input type="text" placeholder="Name of project" ref={name}></input>
            <input
              type="number"
              placeholder="Prority"
              min="1"
              max="10"
              ref={priority}
            ></input>
          </div>
        </form>
        <button className="btn waves-effect waves-light" onClick={addProject}>
          Add project
        </button>
      </div>
    </>
  );
}
