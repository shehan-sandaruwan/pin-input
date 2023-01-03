import React from "react";
import PropTypes from "prop-types";
import InputButton from "../atom/InputButton";
import "../styles/element/pininputblocks.scss";

const PinInputBlocks = ({ inputArray }) => {
  return (
    <React.Fragment>
      <div className="input-block-container">
        {inputArray.map((item) => {
          return (
            <InputButton value={item.value} state={item.state} key={item.key} />
          );
        })}
      </div>
    </React.Fragment>
  );
};

PinInputBlocks.propTypes = {
  inputArray: PropTypes.array,
};

export default PinInputBlocks;
