import React from 'react'
import { useCart } from './Utils/useCart'

function CartModal() {
  const { items, plusOne, minusOne, removeItem } = useCart()
  return (
    <>
      <div>
        <table className="table CartTable" width="100%" cellSpacing="0">
          <thead className="noBorder">
            <tr>
              <th className="TableBigTitle">商品</th>
              <th>單價</th>
              <th>數量</th>
              <th className="CartTHTotal">總數</th>
            </tr>
          </thead>
          <tbody>
            {items.map((v, i) => {
              console.log('cart items:', v)
              return (
                <tr key={v.RandomKey}>
                  <td className="noBorder">
                    <div className="CartImg ">
                      <img src={v.RemoveBG} alt="" />
                    </div>
                  </td>
                  <td className="CartName"> {v.product_name}</td>
                  <td className="Yellow CartPrice">
                    NTD{''}
                    {v.price}
                  </td>
                  <td>
                    <div className="btn-group mr-2 CartBtn" role="group">
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                          minusOne(v.id)
                        }}
                      >
                        {' '}
                        -{' '}
                      </button>
                      <button type="button" className="btn btn-light">
                        {v.quantity}
                      </button>
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                          plusOne(v.id)
                        }}
                      >
                        {' '}
                        +{' '}
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="CartListTotal">
                      <button
                        type="button"
                        className="noBorder "
                        onClick={() => {
                          removeItem(v.id)
                        }}
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                      <div>
                        <span>總計:</span>
                        <span className="Yellow TotalPrice">
                          NTD{v.price * v.quantity}
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CartModal
