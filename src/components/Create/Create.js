import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../TopBar";
import Cookies from "js-cookie"; // do we need this?
import polyline from "@mapbox/polyline";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "../../redux/activities";

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

    dispatch(actions.setActivities(polylines));

    history.push("/map");

    return data;
  };

  const activities = useSelector(selectors.getActivities);
  console.log(activities);
  return (
    <div>
      <TopBar /> <button onClick={getActivities}>Get Activities </button>
    </div>
  );
};
export default Create;
