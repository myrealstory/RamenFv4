import React,{useState} from 'react'
import  { useCart} from './Utils/useCart'
import {Link} from 'react-router-dom'
import CartModal from './CartModal'
import { Form } from 'react-bootstrap';



function Cart(props) {
    const [pickSend , setPickSend] = useState('');
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
    } = useCart();
  return (
    <div className='CartContainer'>
        <div className="CartRow">
            <h4>購物車</h4>
            <div className="ProcessBar">

            </div>
            <div className=" d-flex justify-content-center">
                <div className="CartBox">
                <CartModal/>
                </div>
                <div className="CartTotal">
                    <div className='ShowTotal'>
                        <span>  即將結帳一共</span>
                        <span className="Total Red">{cart.TotalItems}</span >
                        <span>餐點</span>
                    </div>
                    <div>
                        <span>餐點總計： </span>
                        <span>`"NTD" + {cart.cartTotal}`</span>
                    </div>
                    <h4>運費選擇：</h4>
                    <div>
                        <Form.Radio label="UberEat配送到府"
                         checked={pickSend === 'UberEat'} 
                         value="UberEat"
                         onClick = {()=> setPickSend('UberEat')} />
                    </div>
                </div>
                    

            </div>
        </div>
    </div>
  )
}

export default Cart