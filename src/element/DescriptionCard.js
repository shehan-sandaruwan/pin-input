import React from "react";
import "../styles/element/descriptionCard.scss";
import DisplayMessage from "../atom/DisplayMessage";
import { INTRO_MESSAGE } from "../constant/messages";

const DescriptionCard = () => {
  return (
    <div className="description-cotainer">
      <DisplayMessage
        message={INTRO_MESSAGE}
        customStyles={{
          color: "#fff",
        }}
      />
    </div>
  );
};

export default DescriptionCard;
