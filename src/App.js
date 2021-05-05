import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, Popup } from "react-leaflet";
import TopBar from "./components/TopBar";
import axios from "axios";
import polyline from "@mapbox/polyline";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);

  const client_id = 65712;
  const client_secret = "13512646a9542634eda552b5b8f23acc86f062ca";
  const activities_link = "https://www.strava.com/api/v3/athlete/activities";
  const auth_link = "https://www.strava.com/oauth/token";
  const refresh_token = "caaa3f52fae9712b5fdd56353a84479735170ea0";
  const token = "562b69681325a2f96481869740ef794c27111c88";

  useEffect(() => {
    const fetchData = async () => {
      // get an access token (they expire after 6 hours)
      const authResponse = await axios.all([
        axios.post(
          `${auth_link}?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=refresh_token`
        ),
      ]);

      // use access token to get activities
      const activityResponse = await axios.get(
        `${activities_link}?access_token=${authResponse[0].data.access_token}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const polylines = [];
      for (let i = 0; i < activityResponse.data.length; i += 1) {
        const activity_polyline = activityResponse.data[i].map.summary_polyline;
        const activity_name = activityResponse.data[i].name;
        polylines.push({
          activityPositions: polyline.decode(activity_polyline),
          activityName: activity_name,
        });
      }
      console.log(polylines);
      setActivities(polylines);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <TopBar />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {activities.map((activity, index) => (
          <Polyline key={index} positions={activity.activityPositions}>
            <Popup positions={activity.activityPositions}>
              {activity.activityName}
            </Popup>
          </Polyline>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
