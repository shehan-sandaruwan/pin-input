import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import "../styles/compound/toastMessage.scss";

const ToastMessage = ({ message, severity }) => {
  useEffect(() => {
    if (severity === "success") {
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (severity === "error") {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [severity]);

  return (
    <>
      <ToastContainer />
    </>
  );
};

ToastMessage.prototype = {
  message: PropTypes.string,
  severity: PropTypes.string,
};

export default ToastMessage;
