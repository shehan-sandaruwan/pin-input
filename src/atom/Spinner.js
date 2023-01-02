import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/atom/spinner.scss";

const Spinner = ({ progress = 270 }) => {
  return (
    <React.Fragment>
      <div id="loading">
        <div className="outer-shadow"></div>
        <div className="inner-shadow"></div>
        <div className="hold right" style={{ "--progress": progress }}>
          <div className="fill"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

Spinner.prototype = {
  progress: PropTypes.number,
};

export default Spinner;
