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

  const getSports = () => {
    let sports = {};
    activities.forEach((activity) => {
      if (!sports[activity.type]) {
        sports[activity.type] = true;
      }
    });
    return sports;
  };

  const [filters, setFilters] = useState(getSports());

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

  return (
    <div>
      <FilterBox onSubmit={setFilters} sports={filters} />
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
            <Polyline
              key={index}
              positions={activity.positions}
              pathOptions={{ color: activity.color }}
            >
              <Popup positions={activity.positions}>
                {activity.name}
                {activity.color}
              </Popup>
            </Polyline>
          ))}
      </MapContainer>
    </div>
  );
};
export default Map;
