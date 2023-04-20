import React from "react";

const PicCard = (props) => {
  return (
    <div className="card-container">
      <img
        className="card-pic"
        src={props.image}
        alt={`A ${props.category} snail`}
      />
      <div className="card-footer">
        <p className="card-date">{props.date}</p>
        <p className="card-detail">
          <span>{props.date} </span> <br />
          <ul>
            <li>
              <strong>Category:</strong> <a href="">{props.category} snail</a>
            </li>
            <li>
              <strong>Description:</strong> {props.description}
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default PicCard;
