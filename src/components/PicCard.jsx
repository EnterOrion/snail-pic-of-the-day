import React from "react";

const PicCard = (props) => {
  return (
    <div className="card-container">
      <img className="card-pic" src={props.image} alt={props.alt} />
      <div className="card-footer">
        <p className="card-date">{props.date}</p>
        <p className="card-detail">
          <span>{props.date} </span> <br />
          <ul>
            <li>
              <strong>Category:</strong> <a href="">2D Snail</a>
            </li>
            <li>
              <strong>Description:</strong> A snail drawing on a museum display
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default PicCard;
