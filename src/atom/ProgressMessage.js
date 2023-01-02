import React from "react";
import PropTypes from "prop-types";

const ProgressMessage = ({ isSuccess, progress }) => {
  return (
    <div>{isSuccess ? <div></div> : <label>{`${progress} %`}</label>}</div>
  );
};

export default ProgressMessage;
