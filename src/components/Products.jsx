import React, { useContext } from 'react'
import './Product.css'
import { Cartcontext } from '../App';

export const Products = ({ product }) => {

  const name = product.name.length > 20 ? product.name.substring(0, 15).concat('...') : product.name;

  const addcart = () => {
    setcart([...cart, product])
  }
  const removecart = () => {
    setcart(cart.filter((c) => c.id !== product.id))
  }

  const { cart, setcart } = useContext(Cartcontext)
  return (
    <div>
      <div className="product">
        <div className="img">
          <img src={product.pic} alt="Product Img" />
        </div>
        <div className="details">
          <h4>{name}</h4>
          <p>₹ {product.amt} </p>
          {
            cart.includes(product) ? (
              <button className='btnremove' onClick={removecart}>Remove from cart</button>
            ) : (
              <button onClick={addcart}>Add to Cart</button>
            )
          }
        </div>
      </div>
    </div>
  )
}
