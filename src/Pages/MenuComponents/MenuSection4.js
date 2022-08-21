import React, { useState, useEffect, useContext } from 'react'

import FileMenuInfo from '../Api/MenuApi'
import M4Main from './M3Component/M4Main'
import M4Dot from './M3Component/M4Dot'

function MenuSection4(props) {
  const { showModal } = props
  const [arrayData, setArrayData] = useState(0)

  const [menuData] = useContext(FileMenuInfo)
  // console.log('MenuSec4:', menuData)
  // console.log('menuData', menuData)
  return (
    <>
      <div className="Mec2 pb-8">
        <div className="TabsContainer ">
          {!!menuData[0] && menuData[0].length
            ? menuData[0]
                .filter((v, i) => v.FoodType === 'Sub')
                .map((value, index) => {
                  console.log('menu3Main:', index)
                  return (
                    <M4Main
                      value={value}
                      index={index}
                      arrayData={arrayData}
                      showModal={showModal}
                      key={value.RandomKey}
                    />
                  )
                })
            : null}
        </div>
        <div className="TabsBTN">
          {!!menuData[0] && menuData[0].length
            ? menuData[0]
                .filter((v, i) => v.FoodType === 'Sub')
                .map((value, index) => {
                  {/* console.log('menu3dot:', value) */}
                  return (
                    <M4Dot
                      value={value}
                      index={index}
                      ClicktoChange={() => {
                        setArrayData(index)
                      }}
                      arrayData={arrayData}
                      key={value.RandomKey2}
                    />
                  )
                })
            : null}
        </div>
      </div>
    </>
  )
}

export default MenuSection4
