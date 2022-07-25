import React from "react";
// import { Link } from "react-router-dom";
import "../CSS/Main.css";
// import { ParallaxProvider } from 'react-scroll-parallax';
import HorizontalScroll from "react-scroll-horizontal";

function Section02() {
  return (
    <div className="SecStyle">
      <div className="MContainer ">
        <div className="SecondBG">
          <HorizontalScroll>
            <div className="ScrollBG bG1"></div>
            <div className="ScrollBG bG2"></div>
            <div className="ScrollBG bG3"></div>
          </HorizontalScroll>
          <div className="Sectitle">
            <h2>嚴選各種來自印度香料的馬薩拉和食材</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section02;
