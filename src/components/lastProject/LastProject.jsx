import React from "react";
import "./lastProject.scss";

const LastProject = () => {
  return (
    <div className="contentWrapper">
      <div className="header">
        <p>OUR LATEST PROJECTS</p>
        <span>Here is our LATEST projects, you'll love theme!</span>
      </div>
      <div className="projectsContainer">
        <img src="./assets/one.jpg" alt="project #1" />
        <img src="./assets/two.jpg" alt="project #2" />
        <img src="./assets/three.jpg" alt="project #3" />
        <img src="./assets/four.jpg" alt="project #4" />
        <img src="./assets/five.jpg" alt="project #5" />
        <img src="./assets/six.jpg" alt="project #6" />
        <img src="./assets/seven.jpg" alt="project #7" />
        <img src="./assets/eight.jpg" alt="project #8" />
      </div>
    </div>
  );
};

export default LastProject;
