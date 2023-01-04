import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/atom/input.scss";

const InputButton = ({
  state,
  value,
  onChangeInputValue,
  index,
  hideModeEnable,
}) => {
  useEffect(() => {
    if (state) {
      const input = document.querySelector(`[data-state=${state}]`);
      if (input) {
        input.focus({ focusVisible: true });
      }
    }
  }, [state]);

  return (
    <React.Fragment>
      <div
        className="pin-input-wrapper"
        data-mode={hideModeEnable ? "hide" : "show"}
      >
        <input
          data-state={state}
          data-mode={hideModeEnable ? "hide" : "show"}
          onChange={(e) => onChangeInputValue(index, e.target.value)}
          type="text"
          className="input-box"
          value={value}
        />
        <span>&#46;</span>
      </div>
    </React.Fragment>
  );
};

InputButton.propTypes = {
  state: PropTypes.string,
  value: PropTypes.string,
  onChangeInputValue: PropTypes.func,
  index: PropTypes.number,
  hideModeEnable: PropTypes.bool,
};

export default InputButton;
