import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Card.css";
import Product from "./Product";
import { productData, responsive } from "./dataproduct";
const FlashDeals = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <>
      <div className="mid">
        <h1>Flash Deals</h1>
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>
      </div>
    </>
  );
};

export default FlashDeals;
