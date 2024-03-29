import React, { useState, useEffect, useContext } from "react";
import "../CSS/Main.css";
import FileMenuInfo from "../Api/MenuApi";
import SliderContent from "../Slider/SliderContent2";
import Arrows from "../Slider/Arrows";
import Dots from "../Slider/Dots2";
// import ImageSlide from '../Slider/pictureslide';



function Section05(props) {
  // const fetchData = async () => {
  //   const responseJson = await getMenuInfo();
  //   console.log(responseJson);
  //   setDiscount(responseJson);

  // };

  // .filter(v=>v.Discount != null)

  // const fetchData = async () => {
  //   const r = await fetch(LIST_GET_NEWS);
  //   const obj = await r.json();
  //   console.log(obj[0]);
  //   setDiscount(obj);
  // }
  const [menuData] = useContext(FileMenuInfo);
  console.log(menuData[0]);

  const [activeIndex, setActiveIndex] = useState(0);
  // const imageSlider =menuData[0].filter((v)=> v.Discount === '1');
  const len = (v) => {return v.length -1 }
  useEffect(()=>{
    
  },[])
  // const len = menuData[0].length - 1;

  const menuDataFilter = () =>{
    if(menuData[0].length === 0) return; 
    
    return menuData[0].filter((v)=> v.Discount === '1');
  }
  return (
    <div className="SecStyle">
      { console.log(menuData)}
      <div className="MContainer">
        {!!menuData[0] && menuData[0].length ? menuData[0]
          .filter((v)=>v.Discount === '1')
          .map((imageSlider,index)=>{
            console.log("imageSlider: ",imageSlider);
            return (
            <React.Fragment key={index}>
            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} index={index}/>
          
          <Arrows prevSlide={() => {
            setActiveIndex(activeIndex < 1 ? index-1  : activeIndex - 1);
          }} nextSlide={() => {
            setActiveIndex(activeIndex === index ? 0 : activeIndex + 1);
          }}
          index = {index}/>
          <Dots
            activeIndex={activeIndex}
            imageSlider={imageSlider}
            index={index}
            onclick={(activeIndex) => {
              setActiveIndex(activeIndex);
            }}
          />
            </React.Fragment>
            )
        
          }):null }
      </div>
    </div>
  );
}

export default Section05;


// {!!menuData[0] && menuData[0].length ? menuData[0]
//   .filter((v)=>v.Discount === '1')
//   .map((imageSlider,index)=>{
//     console.log("imageSlider: ",imageSlider);
//     return (
//     <>
//     <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
  
//   <Arrows prevSlide={() => {
//     setActiveIndex(activeIndex < 1 ? imageSlider -1  : activeIndex - 1);
//   }} nextSlide={() => {
//     setActiveIndex(activeIndex === imageSlider -1 ? 0 : activeIndex + 1);
//   }}/>
//   <Dots
//     activeIndex={activeIndex}
//     imageSlider={imageSlider}
//     onclick={(activeIndex) => {
//       setActiveIndex(activeIndex);
//     }}
//   />
//     </>
//     )

//   }):null }