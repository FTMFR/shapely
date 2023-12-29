import React from "react";
import "./reverseContent.scss";

const ReverseContent = () => {
  return (
    <div className="w100">
      <div className="container extra2">
        <img src="./assets/seo2.png" alt="seo friendly" />
        <div className="textContent2">
          <p>Portfolio Section</p>
          <span>
            Lorem ipsum dolor, sit amet consectetur
            <br />
            adipisicing elit. Aut doloremque molestiae ad
            <br />
            nihil illum cum porro ipsum veniam voluptatibus
            <br />
            nesciunt.
          </span>
          <button>SEE IT IN ACTION</button>
        </div>
      </div>
    </div>
  );
};

export default ReverseContent;
