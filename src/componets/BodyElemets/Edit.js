import React, { useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import app from "firebase/app";
import FirebaseConf from "../FirebaseConf";

export default function Edit(props) {
  const { id } = useParams();
  console.log(id);
  const navigate = useHistory();
  const edit = app.firestore();
  const proName = useRef("");
  const proPrio = useRef("");

  const Edit = id => {
    edit
      .collection("users/" + localStorage.getItem("userId") + "/projects/")
      .doc(id)
      .update({
        id: id,
        name: proName.current.value,
        priority: proPrio.current.value
      })
      .then(() => {
        navigate.push("/");
        window.location.reload();
      });
  };

  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Project Name" ref={proName}></input>
              <input placeholder="Piority" ref={proPrio}></input>
            </div>
          </div>
        </form>
        <a className="waves-effect waves-light btn" onClick={() => Edit(id)}>
          Edit
        </a>
      </div>
    </div>
  );
}
