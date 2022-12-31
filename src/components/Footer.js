import React from "react";
import gitHubImg from "./github-mark.svg";
import linkedInImg from "./LI-In-Bug.png";

function Footer() {
  return (
    <div className="Footer-container">
      <div>
        <h1>Contact</h1>
        <div className="Email-Phone-Contact">
          <p>christianlau1003@gmail.com</p>
          <span>
            <p>(385)-436-5835</p>
            <img></img>
          </span>
        </div>
        <div className="Git-Link-Contact">
          <a target="_blank" href="https://github.com/cc-lau">
            <img src={gitHubImg} alt="GitHub Logo"></img>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/christian-lau-436431260/"
          >
            <img src={linkedInImg} alt="LI-Logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
