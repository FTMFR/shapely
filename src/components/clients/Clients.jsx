import React from "react";
import "./clients.scss";

const Clients = () => {
  return (
    <div className="containerWrapper">
        <p>OUR MAIN CLIENTS</p>
      <div className="wrapper">
        <img src="./assets/adobe-logo.png" alt="adobe-logo" />
        <img src="./assets/bootstrap-logo.jpg" alt="bootstrap-logo" />
        <img src="./assets/facebook-logo.png" alt="facebook-logo" />
        <img src="./assets/less-logo.png" alt="less-logo" />
        <img src="./assets/sass-logo.png" alt="sass-logo" />
      </div>
    </div>
  );
};

export default Clients;
