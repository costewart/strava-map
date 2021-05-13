import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../TopBar";
import Cookies from "js-cookie"; // do we need this?
import polyline from "@mapbox/polyline";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "../../redux/activities";
const colors = {
  Ride: "#6495ED",
  Run: "#E9967A",
  Swim: "#1E90FF",
  Walk: "#DAA520",
  Hike: "#228B22",
  AlpineSki: "#DCDCDC",
  BackcountrySki: "#DCDCDC",
  Canoe: "#B22222",
  Crossfit: "#2F4F4F",
  Kitesurf: "#00FFFF",
  Surfing: "#556B2F",
};

const Create = () => {
  const history = useHistory();

  const dispatch = useDispatch();

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

    const polylines = [];
    for (let i = 0; i < data.length; i += 1) {
      const activity_polyline = data[i].map.summary_polyline;
      const activity_name = data[i].name;
      const activity_type = data[i].type;

      polylines.push({
        positions: polyline.decode(activity_polyline),
        name: activity_name,
        type: activity_type,
        color: colors[activity_type],
      });
    }

    console.log(polylines);
    dispatch(actions.setActivities(polylines));

    history.push("/map");

    return data;
  };

  return (
    <div>
      <TopBar /> <button onClick={getActivities}>Get Activities </button>
    </div>
  );
};
export default Create;
