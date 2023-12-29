import React from "react";
import { IoMdSearch } from "react-icons/io";

import "./header.scss";

const Header = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="logo">Shapely</div>
        <ul className="content">
          <li>HOME</li>

          <li>BLOG</li>
          <li>PORTFOLIO</li>
          <li>ABOUT</li>
          <li>LEVEL</li>
          <li>SHOP</li>
          <li>
            <IoMdSearch />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
