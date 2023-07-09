import React from 'react'
import '../CSS/Main.css'
import { ControlTranslate } from '../components/interactive/ControlTranslate'

import Driver6BG from '../img/Sec6/Driver_BG.png'
import Driverpic from '../img/Sec6/driver_1.png'
import Footer from '../components/footer'

function Section06() {
  const OFFSET = 0.37
  return (
    <div className="SecStyle">
      <div className="Sec6container mt-5">
        {/* ControllTranslate mouseoffsetX 和 Y 說的是*/}
        <ControlTranslate
          scrollFromY={0}
          scrollToY={-700 * OFFSET}
          mouseOffsetX={-10}
          mouseOffsetY={10}
        >
          <div className="position-relative d-flex justify-content-start">
            <img src={Driver6BG} alt="" className="Sec6driverBG" />
          </div>
        </ControlTranslate>
        <ControlTranslate
          scrollFromY={0}
          scrollToY={-1000 * OFFSET}
          mouseOffsetX={-50}
          mouseOffsetY={20}
        >
          <div className="position-relative d-flex justify-content-start">
            <img src={Driverpic} alt="" className="Sec6driver" />
          </div>
        </ControlTranslate>
        <ControlTranslate
          scrollFromY={0}
          scrollToY={-800 * OFFSET}
          mouseOffsetX={-80}
          mouseOffsetY={5}
        >
          <div className="position-relative d-flex justify-content-center Sec6Orderbox">
            <div className="" style={{ 'z-index': '10' }}>
              <p>讓我們把熱騰騰的異國美味帶到你身邊</p>
              <div className="d-flex sec6Title">
                <span>我們有</span>
                <span className="bigRed">外送</span>
                <span>了！</span>
              </div>
              <button>外送點起來</button>
            </div>
          </div>
        </ControlTranslate>
      </div>
      <Footer />
    </div>
  )
}

export default Section06
