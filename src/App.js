import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./componets/NavBar/Navbar";
import Lista from "./componets/BodyElemets/Lista";
import Add from "./componets/BodyElemets/Add";
import CreateAcc from "./componets/BodyElemets/CreateAcc";
import Login from "./componets/BodyElemets/Login";
import Forgot from "./componets/BodyElemets/Forgot";
import Edit from "./componets/BodyElemets/Edit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Lista} />
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/create_acc">
            <CreateAcc />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot">
            <Forgot />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
