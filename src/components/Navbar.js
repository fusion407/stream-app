import React from "react";
// import linkStyles from "../index.css"
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "200px",
  padding: "12px",
  margin: "0 6px 6px",
  // background: "grey",
  textDecoration: "none",
  color: "white",
};

function Navbar({ setIsLoggedIn }) {
  const history = useHistory();

  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }

  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/my-stuff"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        MyStuff
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
