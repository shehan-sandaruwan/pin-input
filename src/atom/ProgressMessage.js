import React from "react";
import PropTypes from "prop-types";
import { lock } from "react-icons-kit/fa/lock";
import { check } from "react-icons-kit/fa/check";
import { Icon } from "react-icons-kit";
import "../styles/atom/progressMessage.scss";

const ProgressMessage = ({ progress = 0 }) => {
  return (
    <div>
      <div className={`success ${progress === 100 && "show"}`}>
        <Icon size={32} icon={check} />
      </div>
      {progress === 0 ? (
        <div style={{ width: 40, marginTop: -30, color: "#141e61" }}>
          <Icon size={32} icon={lock} />
        </div>
      ) : (
        <label>{`${progress} %`}</label>
      )}
    </div>
  );
};

ProgressMessage.prototype = {
  process: PropTypes.number,
};

export default ProgressMessage;
