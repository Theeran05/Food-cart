import React, { useState } from 'react'
import data from './project.json'
import { Products } from './Products'
import './Home.css'


export const Home = () => {
  const [Product] = useState(data)
  return (
    <div>
      <div className="product-container">
        {Product.map((product)=>(
          <Products key={product.id} product={product} />
        ))}
      </div>
    </div>

  )
}
