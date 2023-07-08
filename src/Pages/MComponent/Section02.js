import React,{useState, useRef, useEffect} from 'react'
// import { Link } from "react-router-dom";
import '../CSS/Main.css'
// import { ParallaxProvider } from 'react-scroll-parallax';
import background01 from '../img/background/Seconds_BG01.png';
import background02 from '../img/background/Seconds_BG02.png';
import background03 from '../img/background/Seconds_BG03.png';

function Section02() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  useEffect(() => {
    const scroll = scrollRef.current;
    
    const handleScroll = (event) =>{
      scroll.scrollLeft += event.deltaY;
      event.preventDefault();
    }

    const handleMouseDown = (event) =>{
      setIsDragging(true);
      setStartX(event.pageX - scroll.offsetLeft);
      setScrollLeft(scroll.scrollLeft);
    }

    const handleMouseMove = (event) =>{
      if (!isDragging) return
      event.preventDefault();
      const x = event.pageX - scroll.offsetLeft;
      const walk = x - startX;
      scroll.scrollLeft = scrollLeft - walk;
    }

    const handleMouseUp = () =>{
      setIsDragging(false);
    }

    // scroll.addEventListener("wheel", handleScroll);
    scroll.addEventListener("mousedown", handleMouseDown);
    scroll.addEventListener("mousemove", handleMouseMove);
    scroll.addEventListener("mouseup", handleMouseUp);

    return () => {
      // scroll.removeEventListener("click", handleScroll);
    scroll.addEventListener("mousedown", handleMouseDown);
    scroll.addEventListener("mousemove", handleMouseMove);
    scroll.addEventListener("mouseup", handleMouseUp);
    }
  }, []);

  return (
    <div className="SecStyle">
      <div className="MContainer ">
        <div className="SecondBG">
          <div className="horizontalScroll" ref={scrollRef}>
            <div className="ScrollBG">
              <img src={background01} alt="" className="bg" />
              <img src={background02} alt="" className="bg" />
              <img src={background03} alt="" className="bg" />
            </div>
          </div>
          <div className="Sectitle">
            <h2>嚴選各種來自印度香料的馬薩拉和食材</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section02;
