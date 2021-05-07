import React from "react";
import Footer from "../Footer";
import "./Home.css";
import connect from "./connectwithstrava.png";

const client_id = 65712;
const connectWithStrava = async () => {
  console.log("Connecting to Strava...");

  // client_id for my Strava application as listed at https://www.strava.com/settings/api when logged in
  window.location.replace(
    `https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:5000/authenticate&approval_prompt=force&scope=activity:read`
  );
};

const Home = () => {
  return (
    <div className="Home">
      <div className="title">
        <h1>Map Maker</h1>
      </div>
      <div className="description">
        Create your own comprehensive map of your strava routes - choose to
        display any or all your sports, from day 1 or some time in between. A
        great map to visualize your activity in an area, and to share with
        friends.
      </div>

      <img src={connect} alt="my image" onClick={connectWithStrava} />

      <Footer />
    </div>
  );
};
export default Home;
