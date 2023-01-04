import React from "react";
import DescriptionCard from "../element/DescriptionCard";
import InputPinCard from "../element/InputPinCard";
import "../styles/compound/inputmodal.scss";
import PropTypes from "prop-types";

const PinInputModal = ({
  progress,
  isSuccess,
  inputArray,
  pinValue,
  inputChangeHandler,
  hideModeEnable,
  onClickHideMode,
  onSumitHandler,
}) => {
  return (
    <div className="input-modal">
      <DescriptionCard />
      <InputPinCard
        progress={progress}
        isSuccess={isSuccess}
        inputArray={inputArray}
        pinValue={pinValue}
        inputChangeHandler={inputChangeHandler}
        hideModeEnable={hideModeEnable}
        onClickHideMode={onClickHideMode}
        onSumitHandler={onSumitHandler}
      />
    </div>
  );
};

PinInputModal.prototype = {
  progress: PropTypes.number,
  isSuccess: PropTypes.bool,
  inputArray: PropTypes.array,
  pinValue: PropTypes.string,
  inputChangeHandler: PropTypes.func,
  hideModeEnable: PropTypes.bool,
  onClickHideMode: PropTypes.func,
  onSumitHandler: PropTypes.func,
};

export default PinInputModal;
