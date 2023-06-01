import React from "react";
import Home from "../component/mainpage/Home";
import FlashDeals from "../component/flashDeals/FlashDeals";
import Header from "../common/header/Header";
import Footer from "../components/website/Footer/Footer";

const Pages = () => {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <FlashDeals />
      {/* <Footer /> */}
    </>
  );
};

export default Pages;
