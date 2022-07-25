import React, { useState, useEffect, useContext } from "react";
import "../CSS/Main.css";
import FileMenuInfo from "../Api/MenuApi";

function Section01() {
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

  return (
    <div className="SecStyle">
      <div className="MContainer">
        {menuData[0] &&
          menuData[0].length &&
          menuData[0]
            .filter((v) => v.Discount === "1")
            .map((v, i) => {
              console.log(v.Discount);
              return (
                <div className="d-flex BGwhite" key={i}>
                  <div>
                    <div className="SecContent">
                      <div>
                        <h3>{v.product_name}</h3>
                      </div>
                      <div>
                        <p>{v.product_description}</p>
                      </div>
                    </div>
                    <div className="Sec5Image">
                      <img src={v.Image} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Section01;
