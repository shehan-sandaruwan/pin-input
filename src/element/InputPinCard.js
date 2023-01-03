import React, { useEffect, useMemo, useState } from "react";
import "../styles/element/inputPinCard.scss";
import PropTypes from "prop-types";
import Spinner from "../atom/Spinner";
import ProgressMessage from "../atom/ProgressMessage";
import DisplayMessage from "../atom/DisplayMessage";
import { ENTER_PIN } from "../constant/messages";
import PinInputBlocks from "./PinInputBlocks";
import SubmitButton from "../atom/SubmitButton";
import ShowHideToggle from "../atom/ShowHideToggle";

const InputPinCard = ({
  progress,
  isSuccess,
  inputArray,
  inputChangeHandler,
  onClickHideMode,
  hideModeEnable,
}) => {
  const addHideModeInput = useMemo(() => {
    return (
      <ShowHideToggle
        showHideCheckBoxHandler={onClickHideMode}
        hideModeEnable={hideModeEnable}
      />
    );
  }, [hideModeEnable]);

  return (
    <div className="inputpin-cotainer">
      <Spinner progress={progress}>
        <ProgressMessage progress={progress} isSuccess={isSuccess} />
      </Spinner>
      <DisplayMessage
        message={ENTER_PIN}
        customStyles={{
          color: "#333333",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      />
      <PinInputBlocks
        inputArray={inputArray}
        inputChangeHandler={inputChangeHandler}
        hideModeEnable={hideModeEnable}
      />
      {addHideModeInput}
      <SubmitButton />
    </div>
  );
};

InputPinCard.prototype = {
  isSuccess: PropTypes.bool,
  process: PropTypes.number,
  inputArray: PropTypes.array,
  inputChangeHandler: PropTypes.func,
  onClickHideMode: PropTypes.func,
};

export default InputPinCard;
