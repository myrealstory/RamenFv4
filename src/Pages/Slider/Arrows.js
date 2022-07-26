import React from 'react'
import { ArrowRight } from "../img/SVG/Sec5Arrow_Right.svg";

function Arrows({ prevSlide , nextSlide}){
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        {/* <iframe src="../img/SVG/Sec5Arrow_Left" alt="" /> */}
      </span>

      <span className="next" onClick={nextSlide}>
        {/* <iframe src='../img/SVG/Sec5Arrow_Right.svg' alt="" /> */}
      </span>
    </div>
  );
}

export default Arrows