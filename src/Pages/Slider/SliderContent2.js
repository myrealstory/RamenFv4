import React from "react";

function SliderContent({ activeIndex, imageSlider, index }) {
  return (
    <section>

        <div
        key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <div className="Sec5Content">
            <h3 className="Sec5H3">{imageSlider.product_name}</h3>
            <p className="Sec5P">{imageSlider.product_description}</p>
          </div>
          <div className="Sec5Image">
            <img src={imageSlider.Image} alt="" />
          </div>
        </div>
      
    </section>
  );
}

export default SliderContent;
