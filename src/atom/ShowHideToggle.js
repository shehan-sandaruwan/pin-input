import React from "react";
import PropTypes from "prop-types";
import "../styles/atom/showhideToggle.scss";

const ShowHideToggle = ({ showHideCheckBoxHandler }) => {
  return (
    <div className="show-hide">
      <input
        type="checkbox"
        id="show-hide-toggle"
        onClick={showHideCheckBoxHandler}
      />
      <label for="show-hide-toggle">Hide Input</label>
    </div>
  );
};

ShowHideToggle.prototype = {
  showHideCheckBoxHandler: PropTypes.func,
};
export default ShowHideToggle;
