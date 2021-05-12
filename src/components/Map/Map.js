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

  const [filters, setFilters] = useState({
    Ride: true,
    Kitesurf: true,
    Surfing: true,
  });

  const removeFalsy = (obj) => {
    let newObj = {};
    Object.keys(obj).forEach((prop) => {
      if (obj[prop]) {
        newObj[prop] = obj[prop];
      }
    });
    return newObj;
  };

  const sports = Object.keys(removeFalsy(filters));

  console.log(sports);
  return (
    <div>
      <FilterBox onSubmit={setFilters} sports={filters}/>
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
          .filter((activity) => sports.includes(activity.type))
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
