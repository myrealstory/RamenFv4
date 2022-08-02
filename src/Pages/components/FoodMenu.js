import React from "react";
import { Link } from "react-router-dom";
import "../CSS/FoodMenu.css";
import Navbar from "../components/nav";

import MenuSection2 from "../MenuComponents/MenuSection2";
import MenuSection3 from "../MenuComponents/MenuSection3";

import BannerImg from "../img/MenuImg/banner.png";

function FoodMenu() {
  return (
    <section className="MBody">
      <div className="Mcontainer">
       
        <div className="BannerContainer">
          <div className="BContent">
            <h3>最正異國風味</h3>
            <p>
              鮮蝦與香料為基底熬煮，嚐起來帶有嗆辣感好是滋味！...
              東央貢熬煮的時候廚房充斥著酸辣味，瞬間一秒來到泰式餐廳的感覺！這道菜不難，所有材料在家樂福可以一站購全，不想出門遙控吳伯義或是傅龐達購買也可以唷
            </p>
            <div className="d-flex justify-content-end">
              <Link to="#/" className="Sec5Link">
                點我了解更多
              </Link>
            </div>
          </div>
          <div className="BannerImg">
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
      <MenuSection2 />
      <MenuSection3/>
    </section>
  );
}

export default FoodMenu;
