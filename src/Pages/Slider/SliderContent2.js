import React from "react";
import { Link } from 'react-router-dom'

function SliderContent({ activeIndex, imageSlider, index }) {
  return (
    <section>
      <div
        key={index}
        className={index === activeIndex ? "slides active" : "inactive"}
      >
        <div className="boxCenter">
          <div className="Sec5Content">
            {/* 产品名称 */}
            <h3 className="Sec5H3">{imageSlider.product_name}</h3>
            {/* 产品叙述 */}
            <p className="Sec5P">{imageSlider.product_description}</p>
            <div className="d-flex justify-content-end">
              <Link to="#/" className="Sec5Link">
                點我了解更多
              </Link>
            </div>
          </div>
        </div>
        <div className="Sec5Image">
          <img src={imageSlider.Image} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SliderContent;
