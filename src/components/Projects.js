import React from "react";
import gitHubImg from "./github-mark.svg";
import weatherAppImg from "./weather-app.png"
import todoImg from "./to-do-app.png"
import calculatorImg from "./calculator.png"
import libraryImg from "./library.png"

function Projects() {
  return (
    <div className="Projects-container">
      <div>
        <h1 className="Projects-header">Projects</h1>
      </div>
      <div className="Projects-gallery">
        <div className="Project-card">
          <h1>Weather App</h1>
          <img className="Project-img" src={weatherAppImg}></img>
          <p className="Tech-used">HTML/CSS JAVASCRIPT</p>
          <div className="Project-links">
            <a target="_blank" href="https://github.com/cc-lau/weather-app">Source Code</a>
            {/* <a target="_blank" href="url">Live Preview</a> */}
          </div>
        </div>
        <div className="Project-card">
          <h1>To Do List</h1>
          <img className="Project-img" src={todoImg}></img>
          <p className="Tech-used">HTML/CSS JAVASCRIPT</p>
          <div className="Project-links">
            <a target="_blank" href="https://github.com/cc-lau/todo-list">Source Code</a>
            {/* <a target="_blank" href="url">Live Preview</a> */}
          </div>
        </div>
        <div className="Project-card">
          <h1>Calculator</h1>
          <img className="Project-img" src={calculatorImg}></img>
          <p className="Tech-used">HTML/CSS JAVASCRIPT</p>
          <div className="Project-links">
            <a target="_blank" href="https://github.com/cc-lau/calculator">Source Code</a>
            {/* <a target="_blank" href="url">Live Preview</a> */}
          </div>
        </div>
        <div className="Project-card">
          <h1>Library App</h1>
          <img className="Project-img" src={libraryImg}></img>
          <p className="Tech-used">HTML/CSS JAVASCRIPT</p>
          <div className="Project-links">
            <a target="_blank" href="https://github.com/cc-lau/library-app">Source Code</a>
            {/* <a target="_blank" href="url">Live Preview</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
