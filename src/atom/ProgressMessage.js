import React from "react";
import PropTypes from "prop-types";
import { lock } from "react-icons-kit/fa/lock";
import { check } from "react-icons-kit/fa/check";
import { Icon } from "react-icons-kit";

const ProgressMessage = ({ isSuccess, progress = 0 }) => {
  return (
    <div>
      {isSuccess ? (
        <div>
          <Icon size={32} icon={check} />
        </div>
      ) : progress === 0 ? (
        <div style={{ width: 40, marginTop: -5 }}>
          <Icon size={32} icon={lock} />
        </div>
      ) : (
        <label>{`${progress} %`}</label>
      )}
    </div>
  );
};

ProgressMessage.prototype = {
  isSuccess: PropTypes.bool,
  process: PropTypes.number,
};

export default ProgressMessage;
