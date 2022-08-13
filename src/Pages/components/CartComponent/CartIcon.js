import React from 'react'
import { useCart } from './Utils/useCart'
import { FaShoppingCart } from 'react-icons/fa'

function CartIcon(props) {
  const { cart } = useCart()

  return (
    <button type="button" className="CartIcon">
      <FaShoppingCart className="cart-icon" />{' '}
      <span className="CartAmount">{cart.totalItems}</span>{' '}
      {/* <span className="badge badge-info badge-pill">{cart.cartTotal}</span> */}
    </button>
  )
}

export default CartIcon
