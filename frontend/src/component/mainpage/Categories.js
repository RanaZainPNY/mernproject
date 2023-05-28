import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/architec1.jpg",
      cateName: "Architectural Antiques",
    },
    {
      cateImg: "./images/category/architec1.jpg",
      cateName: "Architectural Antiques",
    },
    {
      cateImg: "./images/category/architec1.jpg",
      cateName: "Architectural Antiques",
    },
    {
      cateImg: "./images/category/architec1.jpg",
      cateName: "Architectural Antiques",
    },
    {
      cateImg: "./images/category/architec1.jpg",
      cateName: "Architectural Antiques",
    },
    {
      cateImg: "./images/category/architec1.jpg",
      cateName: "Architectural Antiques",
    },
 
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
