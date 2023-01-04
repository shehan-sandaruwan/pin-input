import React from "react";
import PropTypes from "prop-types";
import "../styles/atom/showhideToggle.scss";

const ShowHideToggle = ({ showHideCheckBoxHandler, hideModeEnable }) => {
  return (
    <div className="show-hide">
      <input
        type="checkbox"
        id="show-hide-toggle"
        onClick={showHideCheckBoxHandler}
        defaultChecked={hideModeEnable}
      />
      <label htmlFor="show-hide-toggle">Hide Input</label>
    </div>
  );
};

ShowHideToggle.prototype = {
  showHideCheckBoxHandler: PropTypes.func,
  hideModeEnable: PropTypes.bool,
};
export default ShowHideToggle;
