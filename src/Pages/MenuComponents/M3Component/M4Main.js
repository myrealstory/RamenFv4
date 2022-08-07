import React from 'react'
import ChilliIcon from '../../img/SVG/ChiliIcon.svg'

function M3Main({ value, index, arrayData }) {
  console.log('insideM4Main:', index)
  const M4file = value
  const spicyLevel = value.SpicyLevel
  return (
    <div
      className="TabsBox"
      hidden={arrayData != index}
      style={{ backgroundColor: `${value.BackGColor}` }}
    >
      <div className="TabsContents">
        <div className="TabsChili">
          {spicyLevel === 'Level2' ? (
            <>
              <img src={ChilliIcon} alt="" /> <img src={ChilliIcon} alt="" />
            </>
          ) : null}
          {spicyLevel === 'Level1' ? (
            <>
              <img src={ChilliIcon} alt="" />
            </>
          ) : null}
          {spicyLevel === 'Level3' ? (
            <>
              <img src={ChilliIcon} alt="" /> <img src={ChilliIcon} alt="" />
              <img src={ChilliIcon} alt="" />
            </>
          ) : null}
          {spicyLevel === 'Level4' ? (
            <>
              <img src={ChilliIcon} alt="" /> <img src={ChilliIcon} alt="" />
              <img src={ChilliIcon} alt="" />
              <img src={ChilliIcon} alt="" />
            </>
          ) : null}
          {spicyLevel === 'Level5' ? (
            <>
              <img src={ChilliIcon} alt="" /> <img src={ChilliIcon} alt="" />
              <img src={ChilliIcon} alt="" />
              <img src={ChilliIcon} alt="" />
              <img src={ChilliIcon} alt="" />
            </>
          ) : null}
        </div>
        <h3 className="mb-2 YellowTabTitle">{M4file.product_name}</h3>
        <p className="materials mb-2">{M4file.Materials}</p>
        <span className="TabsPrice">NTD .</span>
        <span className="TabsPrice">{M4file.price}</span>
       
        <div className="borderBottom mt-2 mb-2"></div>
        <p className="ContentsDescription mb-2">{M4file.product_description}</p>
        <button className="AddtoCart btn mt-4">
          <div className="cartBtn">馬上加入購物車</div>
        </button>
      </div>
      <div className="TContentImg">
        <img src={M4file.RemoveBG} alt="" />
      </div>
    </div>
  )
}

export default M3Main
