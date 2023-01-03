import React from "react";
import PropTypes from "prop-types";
import "../styles/atom/displayMessage.scss";

const DisplayMessage = ({ message, customStyles }) => {
  return (
    <div className="display-message" style={{ ...customStyles }}>
      {message}
    </div>
  );
};

DisplayMessage.propTypes = {
  message: PropTypes.string,
  customStyles: PropTypes.object,
};

export default DisplayMessage;
