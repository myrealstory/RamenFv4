import React, { useState, useContext } from 'react'
import { useCart } from './Utils/useCart'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'
import { Form } from 'react-bootstrap'
import MemberProvider from '../LoginComponents/MemberProvider'

function Cart(props) {
  // const [pickSend, setPickSend] = useState('')
  const [fillDocument, setFillDocument] = useState(false)
  // const [memberData] = useContext(MemberProvider)
  // const {
  //   cart,
  //   items,
  //   addItem,
  //   removeItem,
  //   updateItem,
  //   clearCart,
  //   isInCart,
  //   plusOne,
  //   minusOne,
  // } = useCart()

  // const finalAmount = () => {
  //   // if (pickSend === 'UberEat') return setPickSend(120);
  //   // else if (pickSend === "GrabFood") return setPickSend(120);
  //   // else if
  //   switch (pickSend) {
  //     case 'UberEat':
  //       return setPickSend(120)
  //     case 'GrabFood':
  //       return setPickSend(120)
  //     case 'FoodPanda':
  //       return setPickSend(120)
  //     case 'SelfDev':
  //       return setPickSend(50)
  //     default:
  //       return setPickSend(120)
  //   }
  //   return cart.totalItems + pickSend
  // }
  // console.log(pickSend);
  return (
    <div className="CartContainer">
      <div className="CartRow">
        <div className="CartList">
          <h4 className="CLTitle">購物車</h4>
          <div className="ProcessBar"></div>
          <div
            className={fillDocument ? 'activeHideBar' : 'hidden activeHideBar'}
          ></div>
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
                  {/* <span className="Total Red">{cart.totalItems}</span> */}
                  <span className="Total Red">3000</span>
                  <span>餐點</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="STtitle">餐點總計： </span>
                  {/* <span className="STPrice">NTD {cart.cartTotal}</span> */}
                  <span className="STPrice">NTD 3000</span>
                </div>
                <h4>運費選擇：</h4>
                <div>
                  {/* <input
                    type="Radio"
                    label="UberEat配送到府"
                    value="UberEat"
                    // onClick={() => setPickSend('UberEat')}
                  />
                  <input
                    type="Radio"
                    label="GrabFood配送到府"
                    value="GrabFood"
                    // onClick={() => setPickSend('GrabFood')}
                  />
                  <input
                    type="Radio"
                    label="FoodPanda配送到府"
                    value="FoodPanda"
                    // onClick={() => setPickSend('FoodPanda')}
                  />
                  <input
                    type="Radio"
                    label="《燒》外送服務"
                    value="SelfDev"
                    // onClick={() => setPickSend('SelfDev')}
                  /> */}

                  <div className="d-flex justify-content-between">
                    <span className="STtitle">結帳總計： </span>
                    <span className="STPrice">{/* NTD ${pickSend} */}</span>
                    {/* {`${cart.cartTotal +pickSend}`} */}
                  </div>
                  <button type="button" onChange={setFillDocument(true)}>
                    <div className="payButton"> 付費方式</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 這裡要寫 */}
          {/* <div className={fillDocument?"active CartInfoBox":"hidden CartInfoBox"}> </div> */}
        </div>
      </div>
    </div>
  )
}

export default Cart
