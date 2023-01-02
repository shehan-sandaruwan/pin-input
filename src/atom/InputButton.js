import React from "react";
import PropTypes from "prop-types";
import "../styles/atom/input.scss";

const InputButton = ({ state, value, onChangeInputValue }) => {
  return (
    <React.Fragment>
      <input
        value={value}
        data-state={state}
        onChange={onChangeInputValue}
        type="text"
      />
    </React.Fragment>
  );
};

InputButton.propTypes = {
  state: PropTypes.string,
  value: PropTypes.string,
  onChangeInputValue: PropTypes.func,
};

export default InputButton;
