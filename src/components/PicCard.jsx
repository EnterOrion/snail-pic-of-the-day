import React from "react";
import { Link } from "react-router-dom";

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
              <strong>Category:</strong>{" "}
              <Link to={`/pictures-${props.category}`}>
                <span className="category-link">{props.category} snail</span>
              </Link>
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
