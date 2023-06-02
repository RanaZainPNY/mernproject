import React, { useEffect, useState } from "react";
import Product from "./LimitedProduct";
import "./categories.css";
import axios from 'axios'
// import { productData, responsive } from "./categoriesdata";

const LimitedEditionPlates = () => {
  const [productData,setProductData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/product');
        setProductData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      // url={item.imageUrl}
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
                    src={item.imageUrl}
                    // src={item.imageurl}
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
