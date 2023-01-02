import React from "react";
import "../styles/atom/pinInput.scss";
import PropTypes from "prop-types";

const PinInputCotainer = ({ pinInputContent }) => {
  return <div className="container">{pinInputContent}</div>;
};

PinInputCotainer.prototype = {
  pinInputContent: PropTypes.node,
};

export default PinInputCotainer;
