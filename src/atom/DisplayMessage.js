import React from "react";
import PropTypes from "prop-types";

const DisplayMessage = ({ message, customStyles }) => {
  return <div style={{ ...customStyles }}>{message}</div>;
};

DisplayMessage.propTypes = {
  message: PropTypes.string,
  customStyles: PropTypes.object,
};

export default DisplayMessage;
