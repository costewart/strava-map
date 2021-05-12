import React from "react";
import Sport from "../Sport";
import "./FilterBox.css";

const FilterBox = ({ onSubmit, sports }) => {
  return (
    <div className="filter_box">
      <h1>Edit Your Map</h1>
      <form className="criteria">
        <div className="checkboxes">
          <p>Type of Sport</p>
          {Object.keys(sports).map((key) => (
            <Sport sport={key} onSubmit={onSubmit} checked={sports[key]} />
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
