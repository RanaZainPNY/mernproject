import React from 'react'
import Product from "./LimitedProduct";
import "./categories.css"
import { productData, responsive } from "./categoriesdata";
const LimitedEditionPlates = () => {
    const product = productData.map((item) => (
        <Product
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
      ));
  return (
    <div>
        <>
      <div className="mid">
        <h1>Flash Deals</h1>
        {product}
      </div>
    </>
    </div>
  )
}

export default LimitedEditionPlates
