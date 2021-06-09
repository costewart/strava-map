import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors, actions } from "../../redux/activities";
import "./SportCheckbox.css";

const SportCheckbox = ({ sport, sportColor, onSubmit, sports }) => {
  const dispatch = useDispatch();
  const color = useRef(null);

  const handleToggle = ({ target }) => {
    onSubmit((s) => ({ ...s, [target.name]: !s[target.name] }));
  };

  const activities = useSelector(selectors.getActivities);

  const changeColor = (newColor) => {
    let ans = [...activities];
    ans.forEach((activity) => {
      if (activity["type"] === sport) {
        activity["color"] = newColor;
      }
    });
    dispatch(actions.setActivities(ans));
  };

  return (
    <div className="sport">
      <input
        type="color"
        id="color-picker"
        ref={color}
        defaultValue={sportColor}
        onChange={() => changeColor(color.current.value)}
      />

      <div className="sport-title">{sport}</div>
      <input
        type="checkbox"
        onChange={handleToggle}
        key={sport}
        name={sport}
        checked={sports[sport]}
      />

      <span class="select"></span>
    </div>
  );
};
export default SportCheckbox;
