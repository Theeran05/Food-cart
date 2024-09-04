import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { Cartcontext } from '../App'

export const Cart = () => {

  const {cart} = useContext(Cartcontext)

  const [total, settotal] = useState(0)

  useEffect(() => {
    settotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0))
  }, [cart])


  return (
    <>
      <h1 className='cart-heading'>Cart Product</h1>
      <div className='cart-container'>
        {
          cart.map((pro) => (
            <div className="cart-product" key={pro.key}>
              <div className="img">
                <img src={pro.pic} alt="" />
              </div>
              <div className="cart-product-details">
                <h3>{pro.name}</h3>
                <p>Price is Rs : {pro.amt}</p>
              </div>
            </div>
          ))
        }

        <h3 className='cart-amt'>Total Amount Rs : {total}</h3>
      </div>
      
    </>
  )
}
