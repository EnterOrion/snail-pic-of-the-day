import React from "react";
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
          <img src={CartoonSnail} alt="A cartoon snail" />
          <p>2D Snails</p>
        </div>
        <div className="category-column">
          <img src={StatueSnail} alt="A statue of a snail" />
          <p>3D Snails</p>
        </div>
        <div className="category-column">
          <img src={LiveSnail} alt="A snail on a leaf" />
          <p>Live Snails</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
