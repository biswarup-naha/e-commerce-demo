import React from 'react'
import Product from "./Product";
import products from "../products.json";
import Cart from './Cart';

function Home() {
  return (
      <>
          <Cart />
          <div className="products w-auto">
              {products.map((product) => (
                  <Product {...product} />
              ))}
          </div>
      </>
  )
}

export default Home