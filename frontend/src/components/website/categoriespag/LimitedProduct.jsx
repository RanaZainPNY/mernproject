import React from 'react'

const LimitedProduct = (props) => {
  return (
    <div>
       <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
    </div>
  )
}

export default LimitedProduct
