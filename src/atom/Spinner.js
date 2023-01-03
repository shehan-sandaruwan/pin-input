import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/atom/spinner.scss";
import PropTypes from "prop-types";

const Spinner = (props) => {
  const { progress } = props;
  return (
    <React.Fragment>
      <div className="circular-progress">
        <CircularProgressbarWithChildren value={progress}>
          {props.children}
        </CircularProgressbarWithChildren>
      </div>
    </React.Fragment>
  );
};

Spinner.prototype = {
  progress: PropTypes.number,
};

export default Spinner;
