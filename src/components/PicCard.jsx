import React from "react";

const PicCard = (props) => {
  return (
    <div className="card-container">
      <img className="card-pic" src={props.image} alt={props.alt} />
      <span class="card-footer">
        <span>{props.date}</span>
      </span>
    </div>
  );
};

export default PicCard;
