import React from "react";
import gitHubImg from "./github-mark.svg";
import linkedInImg from "./LI-In-Bug.png";

export default function Hero() {
  return (
    <div className="Hero-container">
      <div className="Hero-name">
        <h1>Hi, I'm Christian | Web Developer</h1>
      </div>
      <div className="Hero-link-desc-container">
        <div className="Hero-desc">
          <p>
            I'm a lifelong learner <span className="Emoji">&#127891;</span> who loves to create <span className="Emoji">&#x1F3B6;</span> and express myself
            through technology <span className="Emoji">&#x1F5A5;</span>
          </p>
        </div>
        <div className="Hero-links">
          <a target="_blank" href="https://github.com/cc-lau">
          <img src={gitHubImg} alt="GitHub Logo"></img>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/christian-lau-436431260/">
          <img src={linkedInImg} alt="LI-Logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
