import React from "react";
import SportCheckbox from "../SportCheckbox";
import "./FilterBox.css";

const FilterBox = ({ onSubmit, sports }) => {
  let colors = {
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

  return (
    <div className="filter_box">
      <h1>Edit Your Map</h1>
      <form className="criteria">
        <div className="checkboxes">
          <p>Type of Sport</p>
          {Object.keys(sports).map((sport) => (
            <SportCheckbox
              sport={sport}
              sportColor={colors[sport]}
              onSubmit={onSubmit}
              sports={sports}
            />
          ))}
        </div>
        <p>Time Period </p>
        <p> Most Popular </p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default FilterBox;
