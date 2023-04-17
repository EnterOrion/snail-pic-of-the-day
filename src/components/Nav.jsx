import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">🌿 Home</Link>
          </li>
          <li>
            <Link to="/pictures-all">🌿 Pics</Link>
          </li>
          <li>
            <Link to="/categories">🌿 Categories</Link>
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
