import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div
                className="box d-flex justify-content-center align-items-center top"
                key={index}
              >
                <div className="left p-5">
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className="btn-primary"> Visit Collections </button>
                </div>
                <div className="right me-5">
                  <img src={value.cover} alt="" style={{ width: "300px", height: "300px" }} />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
