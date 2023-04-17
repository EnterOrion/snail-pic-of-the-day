import React from "react";
import Navigation from "../components/Nav";
import PicCard from "../components/PicCard";
import TestPic from "../assets/testSnailPic.jpg";

const PicPage = () => {
  return (
    <div className="pic-page">
      <Navigation />
      <h1>All pics</h1>
      <div className="pic-page-content">
        <PicCard image={TestPic} alt="Test picture of a snail" date="4/4/22" />
        <PicCard image={TestPic} alt="Test picture of a snail" date="4/4/22" />
        <PicCard image={TestPic} alt="Test picture of a snail" date="4/4/22" />
        <PicCard image={TestPic} alt="Test picture of a snail" date="4/4/22" />
        <PicCard image={TestPic} alt="Test picture of a snail" date="4/4/22" />
        <PicCard image={TestPic} alt="Test picture of a snail" date="4/4/22" />
      </div>
    </div>
  );
};

export default PicPage;
