import React from "react";
import { MapContainer, TileLayer, Polyline, Popup } from "react-leaflet";
import "./Map.css";

const Map = ({ activities }) => {
  return (
    <MapContainer
      center={[49.246292, -123.116226]}
      zoom={11}
      scrollWheelZoom={true}
    >
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
  );
};
export default Map;
