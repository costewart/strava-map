import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "../../redux/activities";
import "./FilterBox.css";

const FilterBox = ({ onSubmit, sports }) => {
  const dispatch = useDispatch();

  const handleToggle = ({ target }) => {
    console.log("in handle toggle", target.name);
    onSubmit((s) => ({ ...s, [target.name]: !s[target.name] }));
  };

  return (
    <div className="filter_box">
      <h1>Edit Your Map</h1>
      <form className="criteria">
        <div className="checkboxes">
          <p>Type of Sport</p>
          {Object.keys(sports).map((key) => (
            <label>
              <input
                type="checkbox"
                onChange={handleToggle}
                key={key}
                name={key}
                checked={sports[key]}
              />
              {key}
            </label>
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
