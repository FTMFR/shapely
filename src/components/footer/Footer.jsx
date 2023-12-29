import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container">
      <div className="wrapping">
        <p>Theme by FTMFR Powerd by React.js</p>
        <div className="social">
          <LiaTelegramPlane />
          <FaInstagram />
          <FiTwitter />
          <SlSocialLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
