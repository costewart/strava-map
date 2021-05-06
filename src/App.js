import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Map from "./components/Map";
import Home from "./components/Home";
import polyline from "@mapbox/polyline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from "js-cookie"; // do we need this?
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);

  const client_secret = "13512646a9542634eda552b5b8f23acc86f062ca";
  const activities_link = "https://www.strava.com/api/v3/athlete/activities";
  const auth_link = "https://www.strava.com/oauth/token";
  const refresh_token = "caaa3f52fae9712b5fdd56353a84479735170ea0";
  const token = "562b69681325a2f96481869740ef794c27111c88";

  const getActivities = async () => {
    var access_token = Cookies.get("str-zoom-access_token");
    var refresh_token = Cookies.get("str-zoom-refresh_token");

    const settings = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token,
        "refresh-token": refresh_token,
      },
    };

    var response = await fetch("http://localhost:5000/activities", settings);
    const data = await response.json();
    console.log(data);

    const polylines = [];
    for (let i = 0; i < data.length; i += 1) {
      const activity_polyline = data[i].map.summary_polyline;
      const activity_name = data[i].name;
      polylines.push({
        activityPositions: polyline.decode(activity_polyline),
        activityName: activity_name,
      });
    }
    setActivities(polylines);
    return data;
  };

  useEffect(() => {
    //   const fetchData = async () => {
    //     // get an access token (they expire after 6 hours)
    //     const authResponse = await axios.all([
    //       axios.post(
    //         `https://www.strava.com/oauth/token?client_id=65712&client_secret=13512646a9542634eda552b5b8f23acc86f062ca&code=${client_code}&grant_type=authorization_code`
    //       ),
    //     ]);
    //     console.log("here", authResponse);
    //     // use access token to get activities
    //     const activityResponse = await axios.get(
    //       `${activities_link}?access_token=${authResponse[0].data.access_token}`,
    //       {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       }
    //     );
    //     const polylines = [];
    //     for (let i = 0; i < activityResponse.data.length; i += 1) {
    //       const activity_polyline = activityResponse.data[i].map.summary_polyline;
    //       const activity_name = activityResponse.data[i].name;
    //       polylines.push({
    //         activityPositions: polyline.decode(activity_polyline),
    //         activityName: activity_name,
    //       });
    //     }
    //     console.log(polylines);
    //     setActivities(polylines);
    //   };
    //   fetchData();
    // }, []);
  }, []);

  return (
    <Router>
      <div className="App">
        <TopBar />
        <Home />

        <button onClick={getActivities}>Get Activities </button>

        <Switch>
          <Route path="/map">
            <Map activities={activities} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
