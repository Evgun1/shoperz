import { useEffect, useState } from "react";
import Hero from "../../Elements/Home/Hero/Hero";
import ProductsSlider from "../../Layouts/ProductsSlider/ProductsSlider";
import MainInfo from "../../Elements/Home/MainInfo/MainInfo";
import MainCategories from "../../Elements/Home/MainCategories/MainCategories";
import Bestsellers from "../../Elements/Home/Bestsellers/Bestsellers";
import FeaturedProducts from "../../Elements/Home/FeaturedProducts/FeaturedProducts";
import BigDeals from "../../Elements/Home/BigDeals/BigDeals";

const Home = () => {
  return (
    <>
      <Hero />
      <MainInfo />
      <FeaturedProducts />
      <MainCategories />
      <Bestsellers />
      <BigDeals />
    </>
  );
};

export default Home;
