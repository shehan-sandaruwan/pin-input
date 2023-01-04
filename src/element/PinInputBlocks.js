import React from "react";
import PropTypes from "prop-types";
import InputButton from "../atom/InputButton";
import "../styles/element/pininputblocks.scss";

const PinInputBlocks = ({ inputArray, inputChangeHandler, hideModeEnable }) => {
  return (
    <React.Fragment>
      <div className="input-block-container" data-testid="pin-input-block">
        {inputArray.map((item) => {
          return (
            <InputButton
              value={item.value}
              state={item.state}
              index={item.key}
              key={item.key}
              onChangeInputValue={inputChangeHandler}
              hideModeEnable={hideModeEnable}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

PinInputBlocks.propTypes = {
  inputArray: PropTypes.array,
  inputChangeHandler: PropTypes.func,
  hideModeEnable: PropTypes.bool,
};

export default PinInputBlocks;
