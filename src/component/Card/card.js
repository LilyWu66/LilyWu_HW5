import React from "react";
import Buttons from "../Buttons/buttons";
import Description from "../Description/description";
import Thumbnail from "../Thumbnail/Thumbnail";
import Timestamp from "../Timestamp/timestamp";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <Thumbnail />
      <Description />
      <div className="cardBottom">
        <Buttons />
        <Timestamp />
      </div>
    </div>
  );
};

export default Card;
