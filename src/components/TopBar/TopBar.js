import React, { useCallback } from "react";
import "./TopBar.css";
// import { actions, selectors } from "../../redux/ui";
// import { useDispatch, useSelector } from "react-redux";
// import Button from "../Button";
// import Link from "../Link";
// import classnames from "classnames";
// import { isLocal, getLink } from "../../util/env";
// import { event, cleanPath } from "../../util/analytics";
// import { useLocation } from "react-router-dom";

const TopBar = () => {
  const handleClick = () => {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign(
      "https://www.strava.com/oauth/authorize?client_id=65712&response_type=code&redirect_uri=http://localhost:3000/"
    );
  };
  return (
    <div className="top-bar">
      <div className="logo-wrapper"></div>
      <div className="left">
        <div className="top-bar-header">
          <h1>Strava Map</h1>
          <button onClick={handleClick}></button>
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
