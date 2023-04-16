import React from "react";
import Navigation from "../components/Nav";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navigation />
      <main className="main-landing-page">
        <p className="landing-paragraph">
          Just a cute collection of{" "}
          <span className="pink-accent">snail pics</span> on the internet
        </p>
        <p className="landing-link">
          <a href=""> Browse?</a>
        </p>
      </main>
    </div>
  );
};

export default LandingPage;
