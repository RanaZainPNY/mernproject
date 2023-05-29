import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 import "./Card.css";
const FlashDeals = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="mid">
        <h1>Flash Deals</h1>
        <Carousel responsive={responsive}>
          <div className="card">
            <img src="./images/flash/flash-3.png" alt="" />
            <h2> Antiques </h2>
            <p className="price">$29</p>
            <p>some description about produt</p>
            <p> <button>Add to cart</button> </p>
          </div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </div>
    </>
  );
};

export default FlashDeals;
