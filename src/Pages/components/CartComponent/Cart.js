import React, { useState, useContext, useEffect } from 'react'
import { useCart } from './Utils/useCart'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'
import { Form } from 'react-bootstrap'
import MemberProvider from '../LoginComponents/MemberProvider'

function Cart() {
  const [pickSend, setPickSend] = useState('')
  const [fillDocument, setFillDocument] = useState(false)
  const [memberData] = useContext(MemberProvider)
  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    isInCart,
    plusOne,
    minusOne,
  } = useCart()
  function whenSubmit() { 

  }

  useEffect(() => {
    return () => {}
  }, [])
  const localMember = JSON.parse(localStorage.getItem('auth'))
  const localCart = JSON.parse(localStorage.getItem('cart'))
  console.log('localMember', localMember)
  console.log('localCart', localCart)
  return (
    <div className="CartContainer">
      <div className="CartRow">
        <div className="CartList">
          <h4 className="CLTitle">購物車</h4>
          <div className="ProcessBar"></div>
          <div className={fillDocument ? 'activeHideBar' : 'hidden'}>
            <h4>即將結帳的總金額是： </h4>
            <div className="barBig">
              <h4>NTD {`${cart.cartTotal + pickSend}`}</h4>
              <button
                className="OpenBox"
                type="button"
                onClick={() => {
                  setFillDocument(false)
                }}
              >
                <i class="fa-solid fa-angles-down"></i>
              </button>
            </div>
          </div>
          {/* 這裡設定整個CartBox的地方 */}
          <div
            className={
              !fillDocument ? 'd-flex justify-content-between' : 'hidebox '
            }
          >
            <div className="CartBox">
              <CartModal />
            </div>
            <div className="CartTotal">
              <div className="CTRow">
                <div className="ShowTotal">
                  <span> 即將結帳一共</span>
                  <span className="Total Red">{cart.totalItems}</span>
                  {/* <span className="Total Red">3000</span> */}
                  <span>餐點</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="STtitle">餐點總計： </span>
                  <span className="STPrice">NTD {cart.cartTotal}</span>
                  {/* <span className="STPrice">NTD 3000</span> */}
                </div>
                <h4>運費選擇：</h4>
                <div>
                  <div className="d-flex justify-content-between SelectInput">
                    {/* 當有name以後input - radio 才可以做到選擇單一選項 */}
                    <input
                      name="delivery"
                      type="Radio"
                      label="UberEat配送到府"
                      value="UberEat"
                      onChange={() => setPickSend(120)}
                    />
                    <div className="PickSelection">
                      <p className="SelectTitle">UberEat配送到府</p>
                      <p>+ NTD 120</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between SelectInput">
                    <input
                      name="delivery"
                      type="Radio"
                      label="GrabFood配送到府"
                      value="GrabFood"
                      onChange={() => setPickSend(120)}
                    />
                    <div className="PickSelection">
                      <p className="SelectTitle">GrabFood配送到府</p>
                      <p>+ NTD 120</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between SelectInput">
                    <input
                      name="delivery"
                      type="Radio"
                      label="FoodPanda配送到府"
                      value="FoodPanda"
                      onChange={() => setPickSend(120)}
                    />
                    <div className="PickSelection">
                      <p className="SelectTitle">FoodPanda配送到府</p>
                      <p>+ NTD 120</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between SelectInput">
                    <input
                      name="delivery"
                      type="Radio"
                      label="《燒》外送服務"
                      value="SelfDev"
                      onClick={() => setPickSend(50)}
                    />
                    <div className="PickSelection">
                      <p className="SelectTitle">《燒》為你配送(30公里內)</p>
                      <p>+ NTD 50</p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between SelectInput">
                    <span className="STtitle">結帳總計： </span>
                    <span className="STPrice">
                      {' '}
                      NTD {`${cart.cartTotal + pickSend}`}
                    </span>
                    {/* {`${cart.cartTotal +pickSend}`} */}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFillDocument(true)
                    }}
                    className="payButton"
                  >
                    <div> 付費方式</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 這裡要寫 */}
          <div
            className={
              fillDocument ? 'active CartInfoBox' : 'hidden CartInfoBox'
            }
          >
            <div>
              <form
                action=""
                name="form2"
                onSubmit={whenSubmit()}
                className="d-flex justify-content-between"
              >
                <div className="CartBox">
                  {!!memberData && memberData.length
                    ? memberData
                        .filter((v, i) => {
                          return v.sid === localMember.sid
                        })
                        .map((v, i) => {
                          return (
                            <div key={v.sid} className>
                              <div className="d-flex justify-content-around">
                                <div>
                                  <label htmlFor="" name="CustomerName">
                                    姓名：
                                  </label>
                                  <input
                                    type="text"
                                    className="CustomerName"
                                    name="CustomerName"
                                    value={v.CustomerName}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="" name="CustomerEmail">
                                    郵箱：
                                  </label>
                                  <input
                                    type="text"
                                    className="CustomerEmail"
                                    name="CustomerEmail"
                                    value={v.Email}
                                  />
                                </div>
                                <div>
                                  <label htmlFor="" name="CustomerMobile">
                                    電話號碼：
                                  </label>
                                  <input
                                    type="text"
                                    className="CustomerMobile"
                                    name="CustomerMobile"
                                    value={v.mobile}
                                  />
                                </div>
                              </div>
                              <div>
                                <label htmlFor="" name="CustomerAddress">
                                  配送地址：
                                </label>
                                <input
                                  type="text"
                                  className="CustomerAddress"
                                  name="CustomerAddress"
                                  value={v.address}
                                />
                              </div>
                            </div>
                          )
                        })
                    : null}
                </div>
                <div className="CartTotal">
                  <div className="CTRow">
                    <h4>即將為您準備餐點...</h4>
                    {localCart.map((v, i) => {
                      return (
                        <div className="" key={v.product_sid}>
                          <h4>{v.product_name}</h4>
                          <div className="d-flex justify-content-between">
                            <span>{`+ ${v.quantity}`}</span>
                            <span>{`NTD ${v.price * v.quantity}`}</span>
                          </div>
                        </div>
                      )
                    })}
                    <div className="d-flex justify-content-between SecondTotal">
                      <span>結帳總計</span>
                      <span>
                        {' '}
                        <p className="SecondMoneylogo">NTD</p>
                        <span>{`${cart.cartTotal + pickSend}`}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
