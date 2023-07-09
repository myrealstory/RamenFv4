import React from 'react'
import LOGO from '../img/Logo.png'
import '../../App.css'

function footer () {
  return (
    <>
      <div id="Footer">
        <div className="FootContainer">
          <div className="FootInfo">
            <div className="FootLogo">
              <img src={LOGO} alt="" />
            </div>
            <div className="FootContent ">
              <div className="border-left">
                <p className="FcontentTitle">新北市三重區環河南路999號99樓9號</p>
                <p className="FPhone">086-272-2670</p>
              </div>
              <div className="border-left">
                <p className="Fdate">3月20日 ～ 9月30日 - 10:30 ～ 18:00</p>
                <p className="Fdate">10月01日 ～ 3月19日 - 10:30 ～ 17:00</p>
                <p className="FEmail">gordon_chaxiures@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="Emailbox mt-3">
            <div className="EboxCenter">
              <input
                type="text"
                name="email"
                className="Emailinput"
                placeholder="請輸入您的email訂閱我們"
              />
              <button className="emailBtn"></button>
            </div>
          </div>
          <p className="copyright">
            Copyright and designed by Gordon and Shao food restaurant SDN BHD
          </p>
        </div>
      </div>
    </>
  );
}

export default footer