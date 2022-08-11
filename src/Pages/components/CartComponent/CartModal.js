import React from 'react'
import { useCart } from './Utils/useCart'

function CartModal() {
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  return (
    <>
      <div>
        <table className="table" width="100%" cellSpacing="0">
          <thead>
            <tr>
              <th>商品</th>
              <th>單價</th>
              <th>數量</th>
              <th>總數</th>
            </tr>
          </thead>
          <tbody>
            {items.map((v, i) => {
              return (
                <tr key={v.id}>
                  <td> {v.product_name}</td>
                  <td>{v.price}</td>
                  <td>
                    <div className="btn-group mr-2" role="group">
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
