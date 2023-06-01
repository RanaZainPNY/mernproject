import React from "react";
import Product from "./LimitedProduct";
import "./categories.css";
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
      {/* <div className="mid">
          <h1>Flash Deals</h1>          
          {product}          
        </div>       */}

      <div className="container">
        <div className="row">
          {productData.map((item) => {
            return (
              <div className="col-md-4 p-3">
                <div className="card shadow-lg">
                  <img
                    class="card-img-top"
                    src={item.imageurl}
                    alt="Card image "
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <hr />
                    <p className="card-text"> {item.description} </p>
                    <p>
                      <button>Add to Cart</button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LimitedEditionPlates;
