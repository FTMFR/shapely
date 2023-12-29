import React from "react";
import "./effectPart.scss";

const EffectPart = () => {
  return (
    <div className="effectPart">
        <p className="text">
          WE CHANGE EVERYTHING
          <br />
          WORDPRESS
        </p>
      <div className="containText">
        <span>This is ONLY wordpress theme you EVER want to use.</span>
        <div className="btns">
          <button className="active">READ MORE</button>
          <button>DOWNLOAD NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default EffectPart;
