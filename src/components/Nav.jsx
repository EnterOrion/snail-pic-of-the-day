import React from "react";
import SnailLogo from "../assets/snail.png";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <div className="column-1">
          <li className="logo-text">Snail Pic of the Day</li>
        </div>
        <div className="column-2">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Pics</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
        </div>
        <div className="column-3">
          <img className="logo-pic" src={SnailLogo} alt="" />
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
