import React, { useState, useContext, useEffect, useRef } from 'react'
import { useCart } from './Utils/useCart'
import { Link, useNavigate } from 'react-router-dom'
import CartModal from './CartModal'
import { Form } from 'react-bootstrap'
import MemberProvider from '../LoginComponents/MemberProvider'
import { LIST_CART } from '../../../configs/AjaxPath'
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome'
import { LIST_GET_MEMBER } from '../../../Pages/components/LoginComponents/MemberProvider'

function Cart() {
  const ref = useRef(null)
  const navigate = useNavigate()
  const [pickSend, setPickSend] = useState(0)
  const [fillDocument, setFillDocument] = useState(false)

  const localMember = JSON.parse(localStorage.getItem('auth'))
  const localCart = JSON.parse(localStorage.getItem('cart'))
  const [memberData, setMemberData] = useState({})

  const getInfo = async () => {
    const rMember = await fetch(LIST_GET_MEMBER)
    const rMemberJson = await rMember.json()
    setMemberData(rMemberJson)
  }
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
  const [CartStorage, setCartStorage] = useState({
    username: '',
    mobile: '',
    address: '',
    Email: '',
  })
  const changeFields = (event) => {
    const id = event.target.id
    const val = event.target.value
    console.log({ id, val })

    setCartStorage({ ...CartStorage, [id]: val })
  }

  const whenSubmit = (event) => {
    event.preventDefault()

    const packagetoSend = {
      usersid: localMember.sid,
      username: localMember.account,
      Total_Price: cart.cartTotal + pickSend,
      status: '餐點到付款',
      OrderDetail: localCart,
      CustomerName: CartStorage.username,
      CustomerEmail: CartStorage.Email,
      CustomerMobile: CartStorage.mobile,
      CustomerAddress: CartStorage.address,
      Discount: null,
    }
    fetch(LIST_CART, {
      method: 'POST',
      body: JSON.stringify(packagetoSend),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((result) => {
        // console.log(result);
        if (result.success) {
          console.log('訂單：', result)
          alert(`訂單已完成！幫您跳轉到商品頁面...`)
          localStorage.removeItem('cart')
          window.location.href = '/FoodMenu'
        }
      })
  }

  useEffect(() => {
    getInfo()
    return () => {}
  }, [])
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
                <i className="fa-solid fa-angles-down"></i>
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
                      onClick={() => setPickSend(120)}
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
                      onClick={() => setPickSend(120)}
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
                      onClick={() => setPickSend(120)}
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
                      onClick={() => {
                        setPickSend(50)
                        console.log(pickSend)
                      }}
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
                  <div
                    onClick={() => {
                      setFillDocument(true)
                    }}
                    className="payButton mt-5"
                  >
                    <div> 資料填寫</div>
                  </div>
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
            <div className="mb-5">
              <form
                action=""
                name="form2"
                onSubmit={whenSubmit}
                className="d-flex justify-content-between"
              >
                <div className="CartBox yellowBG mt-5">
                  <div className="CartDetail">
                    {!!localMember && !!memberData && memberData.length
                      ? memberData
                          .filter((v, i) => {
                            return v.sid === localMember.sid
                          })
                          .map((v, i) => {
                            return (
                              <div key={v.sid} className>
                                <div className="d-flex justify-content-around mt-3">
                                  <div>
                                    <label htmlFor="" name="CustomerName">
                                      姓名：
                                    </label>
                                    <br />
                                    <input
                                      type="text"
                                      className="DetailInput CName"
                                      name="CustomerName"
                                      value={
                                        v.CustomerName
                                          ? (CartStorage.username =
                                              v.CustomerName)
                                          : CartStorage.username
                                      }
                                      ref={ref}
                                      onChange={changeFields}
                                    />
                                  </div>
                                  <div>
                                    <label htmlFor="" name="CustomerEmail">
                                      郵箱：
                                    </label>
                                    <br />
                                    <input
                                      type="text"
                                      className="DetailInput"
                                      name="CustomerEmail"
                                      ref={ref}
                                      value={
                                        v.Email.length
                                          ? (CartStorage.Email = v.Email)
                                          : CartStorage.Email
                                      }
                                      onChange={changeFields}
                                    />
                                  </div>
                                  <div>
                                    <label htmlFor="" name="CustomerMobile">
                                      電話號碼：
                                    </label>
                                    <br />
                                    <input
                                      type="text"
                                      className="DetailInput CMobile"
                                      name="CustomerMobile"
                                      ref={ref}
                                      pattern="09\d{8}\"
                                      value={
                                        v.mobile
                                          ? (CartStorage.mobile = v.mobile)
                                          : CartStorage.mobile
                                      }
                                      onChange={changeFields}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    <label htmlFor="" name="CustomerAddress">
                                      配送地址：
                                    </label>
                                    <br />
                                    <input
                                      type="text"
                                      className="DetailInput CAddress"
                                      name="CustomerAddress"
                                      ref={ref}
                                      value={
                                        v.address
                                          ? (CartStorage.address = v.address)
                                          : CartStorage.address
                                      }
                                      onChange={changeFields}
                                    />
                                  </div>
                                </div>
                                <div className="UnderLine mt-5 mb-5"> </div>
                                <div>
                                  <div>
                                    <h4 className="IconSize DarkColor">
                                      <i class="fa-solid fa-lock mr-3"></i>
                                      謹慎理財 信用至上
                                    </h4>
                                    <p className="DarkColor Psize">
                                      回饋與(或寄送)當日前，正卡申請人有以下情況者，即自動喪失參加本活動之資格，申請人所獲得之好禮回饋應於滙豐銀行查明或知悉有該等情事時立即失效，申請人亦不得要求將好禮回饋折換現金或折抵消費金額。(1)信用卡(含正、附卡)遭強制停用、停卡、掛失不補發。(2)非持卡本人交易款項(如遺失被竊、偽卡交易、偽冒申請)。(3)持卡人有信用卡約定條款所列喪失期限利益等情事。
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-around mt-5">
                                  <button
                                    type="submit"
                                    name="LineButton"
                                    className="LinePay mb-3 mr-3 SubmitBtn"
                                  >
                                    LinePay
                                  </button>
                                  <button
                                    type="submit"
                                    name="CreditCardPay"
                                    className="CreditCardPay mb-3 mr-3 SubmitBtn"
                                  >
                                    信用卡結帳
                                  </button>
                                  <button
                                    type="submit"
                                    name="CollectSelf"
                                    className="CollectSelf mb-3 SubmitBtn"
                                  >
                                    餐點到付款
                                  </button>
                                </div>
                              </div>
                            )
                          })
                      : null}
                  </div>
                </div>
                <div className="CartTotal mt-5">
                  <div className="d-flex justify-content-center">
                    <div className="CTRow">
                      <h4>即將為您準備餐點...</h4>
                      {localCart.map((v, i) => {
                        return (
                          <div key={v.product_sid}>
                            <h4 className="FTotalTitle">{v.product_name}</h4>
                            <div className="d-flex justify-content-between">
                              <span className="FTotalPrice">{`+ ${v.quantity}`}</span>
                              <span className="FTotalPrice">{`NTD ${
                                v.price * v.quantity
                              }`}</span>
                            </div>
                          </div>
                        )
                      })}
                      <div className="d-flex justify-content-between SecondTotal mt-5">
                        <span className="FSTitle onepb">結帳總計</span>
                        <p>
                          {' '}
                          <span className="FSTitle">NTD</span>
                          <span className="STotalMoney">{`${
                            cart.cartTotal + pickSend
                          }`}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div></div>
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
