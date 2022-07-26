import React from "react";

function SliderContent({ activeIndex, imageSlider }) {
  return (
    <section>
      {imageSlider.map((slide, index) => {
        return(
        <div
          className={index === activeIndex ? "slides active" : "inactive"}
          key={index}
        >
          <div className="Sec5Content">
            <h3 className="Sec5H3">{slide.product_name}</h3>
            <p className="Sec5P">{slide.product_description}</p>
          </div>
          <div className="Sec5Image">
            <img src={slide.Image} alt="" />
          </div>
        </div>)
})}
      
    </section>
  );
}

export default SliderContent;
