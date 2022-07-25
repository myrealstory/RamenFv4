import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import "../CSS/Main.css";
// import { LIST_GET_NEWS } from '../../configs/AjaxPath'
import dateFormat from 'dateformat';
import FileNewsInfo from "../../configs/AjaxPath";

function Section04() {
  
// const now = new Date();
  // const getData = async () => {
  //   const r = await fetch(LIST_GET_NEWS);
  //   const obj = await r.json();
  //   console.log("getData:",obj);
  //   setData(obj);
  // }
  
  const [newsData] = useContext(FileNewsInfo);
  // console.log(newsData);
  
  return (
    <div className="SecStyle">
      <div className="MContainer">
        <div className="Sec4Title mb-4">
          <h3 className="NewsArrow">最新消息</h3>
          <Link to="/" alt="">
            <p>了解更多</p>
          </Link>
        </div>
        {newsData &&
          newsData.length &&
          newsData.map((v, i) => {
            return (
              <div key={v.SID} className="d-flex justify-content-center ">
                <Link to="#/" className="NewsBox">
                  <h4>{`${v.Created_at}`}</h4>
                  <h3>{v.Title}</h3>
                  <h5>點擊了解更多</h5>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Section04;
