import React from "react";
import "./TopBar.css";

const TopBar = () => {

  return (
    <div className="top-bar">
      <div className="logo-wrapper"></div>
      <div className="left">
        <div className="top-bar-header">
          <h1>Strava Map</h1>
        </div>
        <div className="buttons"></div>
      </div>
      <div className="right expanded"></div>

      <div className="right-hand">
        <div className="hamburger">
          <div>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
