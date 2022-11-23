import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import MyStuff from "./MyStuff";
import Login from "./Login";
import Navbar from "./Navbar";
import "../index.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1 className="title">StreamPlz</h1>
      <div className="App-header">
        <Navbar setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div className="App-body">
        <Switch>
            <Route exact path="/my-stuff">
              <MyStuff />
            </Route>
            <Route exact path="/login">
              <Login setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route exact path="/">
              <Home isLoggedIn={isLoggedIn} />
            </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
