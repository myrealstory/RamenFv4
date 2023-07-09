import React, { useContext, useEffect } from 'react'
import FileMenuInfo from '../Api/MenuApi'
import { useCart } from '../components/CartComponent/Utils/useCart'

function MenuSection2(props) {
  const { showModal } = props
  const { addItem } = useCart()

  const [menuData] = useContext(FileMenuInfo)
  // console.log('MenuSec2:', menuData)

  function shuffle(array1) {
    const array = [...array1]
    let currentIndex = array.length,
      randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  useEffect(() => {}, [])

  // console.log(arrayData[0])

  return (
    <div className="Mec2 position-relative">
      <h3 className="Msec2Title">推薦菜單</h3>
      <div className="Msec2Box">
        {/* 這裡使用Shuffle以後規定只取5件物件 */}
        {!!menuData[0] && menuData[0].length
          ? shuffle(menuData[0])
              .filter((v, i, array) => {
                return i < 5
              })
              .map((value, index, array2) => {

                if (index !== 0) return <div key={array2[index]}></div>

                return (
                  <div key={array2[4].RandomKey2}>
                    {/* random的第一個物件設計 */}
                    <div
                      className="d-flex justify-content-between mt-5 pt-5 borderdotTop"
                      key={array2[0].RandomKey2}
                    >
                      <div className="Msec2Content Msec2cRight">
                        <div style={{ borderTop: '3px solid white' }}>
                          <div className="MS2TitleBox">
                            <h3>{array2[0].product_name}</h3>
                          </div>
                          <div className="MS2Content">
                            <p>{array2[0].product_description}</p>
                          </div>
                          <div className="MS2Price">
                            <span>NTD.</span>
                            <span>{array2[0].price}</span>
                          </div>
                          <button
                            className="MS2button"
                            type="button"
                            onClick={() => {
                              const item = { ...array2[0], quantity: 1 }
                              addItem(item)
                              showModal(array2[0].product_name)
                            }}
                          >
                            <div className="MS2Order">加入購物車</div>
                          </button>
                        </div>
                      </div>
                      <div className="Msec2Image">
                        <img src={array2[0].Image} alt="" />
                      </div>
                    </div>
                    {/* Random的第二件物件 */}
                    <div
                      className="d-flex justify-content-between mt-5 pt-5 borderdotTop"
                      key={array2[1].RandomKey2}
                    >
                      <div className="Msec2Image">
                        <img src={array2[1].Image} alt="" />
                      </div>
                      <div className="Msec2Content Msec2cLeft">
                        <div style={{ borderTop: '3px solid white' }}>
                          <div className="MS2TitleBox">
                            <h3>{array2[1].product_name}</h3>
                          </div>
                          <div className="MS2Content">
                            <p>{array2[1].product_description}</p>
                          </div>
                          <div className="MS2Price">
                            <span>NTD.</span>
                            <span>{array2[1].price}</span>
                          </div>

                          <button
                            className="MS2button"
                            type="button"
                            onClick={() => {
                              const item = { ...array2[1], quantity: 1 }
                              addItem(item)
                              showModal(array2[1].product_name)
                            }}
                          >
                            <div className="MS2Order">加入購物車</div>
                          </button>
                        </div>
                      </div>
                    </div>
                            {/* Random第三件物件 */}
                    <div
                      className="d-flex justify-content-between mt-5 pt-5 borderdotTop"
                      key={array2[2].RandomKey2}
                    >
                      <div className="Msec2Content Msec2cRight">
                        <div style={{ borderTop: '3px solid white' }}>
                          <div className="MS2TitleBox">
                            <h3>{array2[2].product_name}</h3>
                          </div>
                          <div className="MS2Content">
                            <p>{array2[2].product_description}</p>
                          </div>
                          <div className="MS2Price">
                            <span>NTD.</span>
                            <span>{array2[2].price}</span>
                          </div>
                          <button
                            className="MS2button"
                            type="button"
                            onClick={() => {
                              const item = { ...array2[2], quantity: 1 }
                              addItem(item)
                              showModal(array2[2].product_name)
                            }}
                          >
                            <div className="MS2Order">加入購物車</div>
                          </button>
                        </div>
                      </div>
                      <div className="Msec2Image">
                        <img src={array2[2].Image} alt="" />
                      </div>
                    </div>
                    {/* Random第四件物件的設定 */}
                    <div
                      className="d-flex justify-content-between mt-5 mb-5 pt-5 pb-5 borderdotTop borderdotBottom "
                      key={array2[3].RandomKey2}
                    >
                      <div className="Msec2Image">
                        <img src={array2[3].Image} alt="" />
                      </div>
                      <div className="Msec2Content Msec2cLeft">
                        <div style={{ borderTop: '3px solid white' }}>
                          <div className="MS2TitleBox">
                            <h3>{array2[3].product_name}</h3>
                          </div>
                          <div className="MS2Content">
                            <p>{array2[3].product_description}</p>
                          </div>
                          <div className="MS2Price">
                            <span>NTD.</span>
                            <span>{array2[3].price}</span>
                          </div>
                          <button
                            className="MS2button"
                            type="button"
                            onClick={() => {
                              const item = { ...array2[3], quantity: 1 }
                              addItem(item)
                              showModal(array2[3].product_name)
                            }}
                          >
                            <div className="MS2Order">加入購物車</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
          : null}
      </div>
    </div>
  )
}

export default MenuSection2
