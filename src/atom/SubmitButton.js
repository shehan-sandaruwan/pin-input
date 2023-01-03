import React from "react";
import PropTypes from "prop-types";
import "../styles/atom/submitbutton.scss";
import { VERIFY } from "../constant/messages";

const SubmitButton = ({ state, onClickSubmitHandler }) => {
  return (
    <button
      onClick={onClickSubmitHandler}
      data-state-btn={state}
      className="submit-button"
    >
      {VERIFY}
    </button>
  );
};

SubmitButton.propTypes = {
  state: PropTypes.string,
  buttonLabel: PropTypes.string,
  onClickSubmitHandler: PropTypes.func,
};

export default SubmitButton;
