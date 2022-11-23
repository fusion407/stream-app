import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isLoggedIn }) {
//   if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h3>Search for movie/tv show</h3>
    </div>
  );
}

export default Home;
