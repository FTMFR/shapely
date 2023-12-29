import React from "react";
import "./content.scss";

const Content = () => {
  return (
    <div className="container extra">
      <img src="./assets/seo.png" alt="seo friendly" />
      <div className="textContent">
        <p>SEO Friendly</p>
        <span>
          Lorem ipsum dolor, sit amet consectetur
          <br />
          adipisicing elit. Aut doloremque molestiae ad
          <br />
          nihil illum cum porro ipsum veniam voluptatibus
          <br />
          nesciunt.
        </span>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default Content;
