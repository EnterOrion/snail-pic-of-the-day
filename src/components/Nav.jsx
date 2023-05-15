import React, { useState } from "react";
import { Link } from "react-router-dom";
import SnailLogo from "../assets/snail.png";

const Navigation = () => {
  // Handles state of hamburger menu: if clicked, the menu will be rendered
  const [menuClicked, setMenuClicked] = useState(false);

  // Handles the animation for the hamburger menu icon on mobile
  const [animate, setAnimate] = useState(0);
  const clickHandler = () => {
    setMenuClicked(!menuClicked);
    if (animate === 0) {
      setAnimate(1);
    } else {
      setAnimate(0);
    }
  };

  return (
    <nav>
      <ul>
        <div className="main-nav">
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
            <div className="hamburger-wrapper">
              <div
                className="hamburger"
                tabIndex="1"
                role="button"
                animate={animate}
                onClick={clickHandler}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        {menuClicked && (
          <ul className="menu">
            <li>
              <Link to="/">🌿 Home</Link>
            </li>
            <li>
              <Link to="/pictures-all">🌿 Pics</Link>
            </li>
            <li>
              <Link to="/categories">🌿 Categories</Link>
            </li>
          </ul>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
