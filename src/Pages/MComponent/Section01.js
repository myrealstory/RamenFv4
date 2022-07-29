import React,{useState,useContext} from "react";
import Nav from "../components/nav";
import { Link } from "react-router-dom";
import "../CSS/Main.css";
import RamenFont from "../img/background/title02.png";
import RamenCup from "../img/Laksa_Alpha.png";
import AutoBG from "../components/autoBG";
import LoginProvider from "../components/LoginComponents/LoginProvider";
import LoginModal from '../components/LoginComponents/LoginModal'


function Section01() {
  const {activeLogin, setActiveLogin} = useContext(LoginProvider);
  return (
    <div className="SecStyle">
      <div className="MContainer">
        <Nav />
        <LoginModal trigger ={activeLogin} setTrigger ={setActiveLogin}>
                 
        </LoginModal>
        <div className="w100 RamenSec1">
          <span className="AniseAndChili"></span>
          <span className="LemonAndGarlic"></span>
          <Link to="/" className="d-flex RamenMain">
            <div className="RamenTitle">
              <img src={RamenFont} alt="" />
            </div>
            <div className="CupRamen">
              <img src={RamenCup} alt="" />
            </div>
          </Link>
          <div className="RamenFBG">
            <AutoBG />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Section01;
