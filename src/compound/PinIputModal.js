import React from "react";
import DescriptionCard from "../element/DescriptionCard";
import InputPinCard from "../element/InputPinCard";
import "../styles/compound/inputmodal.scss";
import PropTypes from "prop-types";

const PinInputModal = ({ progress, isSuccess, inputArray }) => {
  return (
    <div className="input-modal">
      <DescriptionCard />
      <InputPinCard
        process={progress}
        isSuccess={isSuccess}
        inputArray={inputArray}
      />
    </div>
  );
};

PinInputModal.prototype = {
  process: PropTypes.number,
  isSuccess: PropTypes.bool,
  inputArray: PropTypes.array,
};

export default PinInputModal;
