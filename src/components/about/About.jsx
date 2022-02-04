import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/93820/pexels-photo-93820.jpeg?cs=srgb&dl=pexels-burak-kebapci-93820.jpg&fm=jpg"
            alt=""
            className="about-image"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="aabout-sub">
          It is a long established fact that a photographer will be distracted
          by the stunning views.
        </p>
        <p className="about-desc">
          Developer with a flair for creating elegant solutions in the least
          amount of time with keen understanding of techniques geared toward
          optimum user experience. Passionate about building world class web
          applications.
        </p>
      </div>
    </div>
  );
}

export default About;
