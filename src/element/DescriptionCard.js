import React from "react";
import "../styles/element/descriptionCard.scss";
import Spinner from "../atom/Spinner";
import ProgressMessage from "../atom/ProgressMessage";
import DisplayMessage from "../atom/DisplayMessage";
import PropTypes from "prop-types";
import { ENTER_PIN } from "../constant/messages";

const DescriptionCard = ({ progress, isSuccess }) => {
  return (
    <div className="description-cotainer">
      <DisplayMessage
        message={ENTER_PIN}
        customStyles={{
          color: "#fff",
          fontSize: "1.5rem",
          textAlign: "center",
          margin: "auto",
        }}
      />
    </div>
  );
};

DescriptionCard.prototype = {
  isSuccess: PropTypes.bool,
  process: PropTypes.number,
};

export default DescriptionCard;
