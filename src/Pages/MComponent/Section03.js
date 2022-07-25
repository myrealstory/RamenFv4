import React, { useRef, useEffect, useState} from "react";
import "../CSS/Main.css";
import Rattan_Line from "../img/Rattan_Line.png"
import { AnimationPresence, motion } from 'framer-motion/dist/framer-motion'
import {images} from './image'

function Section03() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => { 
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    //拿到carousel 現在 熒幕滾輪最大的寬， 和 carsousel 現在 外圍最大的寬 
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])

  return (
    <div className="SecStyle">
      <div className="MContainer Sec3BG">
        <div className="Robbg">
          <div className="Sec3Title">
            <section>
              <img src={Rattan_Line} alt="" />
            </section>
            <h3>多種異國料理任君選擇</h3>
            <p>
              全料理使用國外純印度馬薩拉香料和各國專業料理方式，完美呈現異國風情
            </p>
            <div>
              <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right:0,left: -width}} className="inner-carousel">
                  {images.map((image) => {
                    return (
                      <motion.div className="item" key={image}>
                        <img src={image} alt="" />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section03;
