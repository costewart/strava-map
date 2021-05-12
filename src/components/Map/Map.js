import React, { useEffect, useState } from "react";
import FilterBox from "../FilterBox";
import { MapContainer, TileLayer, Polyline, Popup } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "../../redux/activities";

import "./Map.css";

const Map = () => {
  const [activities, setActivities] = useState(
    useSelector(selectors.getActivities)
  );

  let blank = [];
  let usersActivities = [];
  activities.forEach((activity) => blank.push(Object.values(activity)));
  blank.forEach((activityArray) => usersActivities.push(activityArray[2]));

  let data = {
    Ride: "#6495ED",
    Run: "#E9967A",
    Swim: "#1E90FF",
    Walk: "#DAA520",
    Hike: "#228B22",
    AlpineSki: "#DCDCDC",
    BackcountrySki: "#DCDCDC",
    Canoe: "#B22222",
    Crossfit: "#2F4F4F",
    Kitesurf: "#8FBC8F",
    Surfing: "#556B2F",
  };

  let obj = {};
  Object.keys(data).map((sport) => {
    obj[sport] = { state: true, color: data[sport] };
  });

  const [filters, setFilters] = useState(obj);

  const removeFalsy = (obj) => {
    let newObj = {};
    Object.keys(obj).forEach((prop) => {
      if (obj[prop].state) {
        newObj[prop] = obj[prop];
      }
    });
    return newObj;
  };

  console.log("filters before", filters);
  console.log("user activities", usersActivities);

  const filterUserActivities = () => {
    let newObj = {};
    Object.keys(filters).forEach((filter) => {
      if (usersActivities.includes(filter)) {
        newObj[filter] = filters[filter];
      }
    });
    return newObj;
  };

  const sports = filterUserActivities();

  return (
    <div>
      <FilterBox onSubmit={setFilters} sports={sports} />
      <MapContainer
        center={[49.246292, -123.116226]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {activities
          .filter((activity) =>
            Object.keys(removeFalsy(sports)).includes(activity.type)
          )
          .map((activity, index) => (
            <Polyline key={index} positions={activity.activityPositions}>
              <Popup positions={activity.activityPositions}>
                {activity.activityName}
              </Popup>
            </Polyline>
          ))}
      </MapContainer>
    </div>
  );
};
export default Map;
