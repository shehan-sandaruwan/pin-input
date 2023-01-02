import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ buttonLabel, state, onClickSubmitHandler }) => {
  return (
    <button onClick={onClickSubmitHandler} data-state-btn={state}>
      {buttonLabel}
    </button>
  );
};

SubmitButton.propTypes = {
  state: PropTypes.string,
  buttonLabel: PropTypes.string,
  onClickSubmitHandler: PropTypes.func,
};

export default SubmitButton;
