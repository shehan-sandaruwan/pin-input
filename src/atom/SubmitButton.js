import React from "react";
import PropTypes from "prop-types";
import "../styles/atom/submitbutton.scss";
import { VERIFY } from "../constant/messages";

const SubmitButton = ({ process, onClickSubmitHandler }) => {
  return (
    <button
      onClick={onClickSubmitHandler}
      data-state-btn={process === 100 ? "allow" : "not-allow"}
      className="submit-button"
      data-testid="submit-btn"
    >
      {VERIFY}
    </button>
  );
};

SubmitButton.propTypes = {
  process: PropTypes.number,
  onClickSubmitHandler: PropTypes.func,
};

export default SubmitButton;
