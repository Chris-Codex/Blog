import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="top-left">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter-square"></i>
        <i class="fa-brands fa-instagram-square"></i>
      </div>
      <div className="top-center">2</div>
      <div className="top-right">
        <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default TopBar;
