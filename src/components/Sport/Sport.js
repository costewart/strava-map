import React, { useState } from "react";
import { SketchPicker } from "react-color";
import "./Sport.css";

const Sport = ({ sport, onSubmit, checked }) => {
  let openColors = false;

  const handleButtonClick = () => {
    openColors = !openColors;
    console.log(openColors);
  };
  const handleToggle = ({ target }) =>
    onSubmit((s) => ({ ...s, [target.name]: !s[target.name] }));

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={handleToggle}
          key={sport}
          name={sport}
          checked={checked}
        />
        {sport}
      </label>
      <input type="color" id="color-picker" />
      <span class="select"></span>
    </div>
  );
};
export default Sport;
