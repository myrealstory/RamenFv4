import React from 'react'

function Dots ({ activeIndex, onclick , imageSlider, index}) {
  return (
    <div className='all-dots'>
            <span key={index } className={`${activeIndex === index ? "dot active-dot":"dot"}`}
            onClick={()=> onclick(index)}
            ></span>

    </div>
  );
}

export default Dots;