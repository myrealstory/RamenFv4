import React from 'react'
import LOGO from '../img/Logo.png'
import FooterBG from "../img/Footer/b25dd607a1171378f5d5fa42bb785a45.jpg";
import '../../App.css'

function footer () {
  return (
    <>
      <div id="Footer">
        <div className="FootContainer">
          <div className="FootInfo">
            <div className="Logo">
              <img src={LOGO} alt="" />
            </div>
            <div>
              <p>新北市三重區環河南路999號99樓9號</p>
              <span>086-272-2670</span>
              <br />
              <p>3月20日 ～ 9月30日 - 10:30 ～ 18:00</p>
              <p>10月01日 ～ 3月19日 - 10:30 ～ 17:00</p>
              <p>gordon_chaxiures@gmail.com</p>
            </div>
          </div>
          <div className="Emailbox">
            <input type="text" name="email" />
            <button className="emailBtn"></button>
          </div>
          <p>
            Copyright and designed by Gordon and Shao food restaurant SDN BHD
          </p>
        </div>
      </div>
    </>
  );
}

export default footer