import React from 'react'
import ChilliIcon from '../../img/SVG/ChiliIcon.svg'

function M3Main({ value, index, arrayData }) {
  console.log('insideM3Main:', index)
  const M3file = value
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
        <h3 className="mb-2">{M3file.product_name}</h3>
        <p className="materials mb-2">{M3file.Materials}</p>
        <span className="TabsPrice">NTD .</span>
        <span className="TabsPrice">{M3file.price}</span>
        <span>
          ( {'\u00A0'} 含飲料，小菜 {'\u00A0'} )
        </span>
        <div className="borderBottom mt-2 mb-2"></div>
        <p className="ContentsDescription mb-2">{M3file.product_description}</p>
        <button className="AddtoCart btn mt-4">
          <div className="cartBtn">馬上加入購物車</div>
        </button>
      </div>
      <div className="TContentImg">
        <img src={M3file.RemoveBG} alt="" />
      </div>
    </div>
  )
}

export default M3Main
