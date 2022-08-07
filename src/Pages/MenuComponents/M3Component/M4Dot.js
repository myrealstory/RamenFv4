import React from 'react'

function M3Dot({ value, index, arrayData, ClicktoChange }) {
  console.log('M4Dot', value)
  return (
    <div
      className={`TabsHead ${arrayData === index ? `active` : ''}`}
      onClick={ClicktoChange}
      style={{ backgroundColor: `${value.BackGColor}` }}
    >
      <div className="TabsInImg">
        <img src={value.RemoveBG} alt="" />
      </div>
    </div>
  )
}

export default M3Dot
