import React, { useState, useEffect } from "react";
import app from "firebase/app";
import firestore from "firebase/firestore";
import FirebaseConf from "../FirebaseConf";
import Elements from "./Elements";
import { useHistory } from "react-router-dom";

export default function Lista() {
  /* auth.onAuthStateChanged(user => {
    console.log(user);
  });*/

  const db = app.firestore();
  const mod = app.firestore();
  const [list, setList] = useState([10]);
  var items = [];
  const navigate = useHistory();
  const uniqueid = require("uniqid");

  const projetcs = db.collection(
    "users/" + localStorage.getItem("userId") + "/projects/"
  );
  useEffect(() => {
    projetcs.get().then(res => {
      let objetcs = [];
      res.forEach(data => {
        objetcs.push(data.data());
      });
      setList(objetcs);
      //console.log(list);
    });
  }, [projetcs]);

  for (let i of list) {
    items.push(i);
  }
  //console.log(items);

  const EditProject = id => {
    navigate.push("/edit/" + id);
    window.location.reload();
  };

  const DeleteProject = prop => {
    prop != " " || prop != undefined
      ? mod
          .collection("users/" + localStorage.getItem("userId") + "/projects/")
          .doc(prop)
          .delete()
      : console.log("id vacio");
  };

  const elementos = items.map(res => {
    return (
      <div className="row" key={uniqueid()}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{res.name}</span>
              <p>{res.priority}</p>
              <p>{res.id}</p>
            </div>
            <div className="card-action">
              <a href="#" onClick={() => EditProject(res.id)}>
                Edit
              </a>
              <a href="#" onClick={() => DeleteProject(res.id)}>
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {localStorage.getItem("statusLog") == "true" ? (
        <div className="dadad">{elementos}</div>
      ) : (
        <div>Nothing to see</div>
      )}
    </div>
  );
}
