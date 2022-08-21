import React, { useState, useEffect, useContext } from 'react'

import FileMenuInfo from '../Api/MenuApi'
import M3Main from './M3Component/M3Main'
import M3Dot from './M3Component/M3Dot'

function MenuSection3(props) {
  const { showModal } = props
  const [arrayData, setArrayData] = useState(0)

  const [menuData] = useContext(FileMenuInfo)
  // console.log('MenuSec3:', menuData)
  // console.log('menuData', menuData)
  return (
    <>
      <div className="Mec2">
        <div className="TabsContainer">
          {!!menuData[0] && menuData[0].length
            ? menuData[0]
                .filter((v, i) => v.FoodType === 'Main')
                .map((value, index) => {
                  {/* console.log('menu3Main:', index) */}
                  return (
                    <M3Main
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
                .filter((v, i) => v.FoodType === 'Main')
                .map((value, index) => {
                  console.log('menu3dot:', value)
                  return (
                    <M3Dot
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

export default MenuSection3
