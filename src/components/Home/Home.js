import React from "react";

const client_id = 65712;
const connectWithStrava = async () => {
  console.log("Connecting to Strava...");

  // client_id for my Strava application as listed at https://www.strava.com/settings/api when logged in
  window.location.replace(
    `https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:5000/authenticate&approval_prompt=force&scope=activity:read`
  );
};

const Home = () => {
  return <button onClick={connectWithStrava}> Connect </button>;
};
export default Home;
