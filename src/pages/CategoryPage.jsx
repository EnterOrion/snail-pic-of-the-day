import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Nav";
import CartoonSnail from "../assets/2DSnailAlt.jpg";
import StatueSnail from "../assets/3DSnail.jpg";
import LiveSnail from "../assets/live-snail.jpg";

const CategoryPage = () => {
  return (
    <div>
      <Navigation />
      <div className="category-container">
        <div className="category-column">
          <img src={CartoonSnail} alt="A medieval snail" />
          <Link to="/pictures-2D">
            <p>2D Snails</p>
          </Link>
        </div>
        <div className="category-column">
          <img src={StatueSnail} alt="A statue of a snail" />
          <Link to="/pictures-3D">
            <p>3D Snails</p>
          </Link>
        </div>
        <div className="category-column">
          <img src={LiveSnail} alt="A snail on a leaf" />
          <Link to="/pictures-live">
            <p>Live Snails</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
