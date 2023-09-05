import { useEffect, useState } from "react";
import ProductsSlider from "../../../Layouts/ProductsSlider/ProductsSlider";
import useProduct from "../../../../hooks/useProduct";

const FeaturedProducts = () => {
  const products = useProduct("https://dummyjson.com/products?limit=10&skip=10&select=category,title,price,discountPercentage,images");

  return <ProductsSlider products={products} title={"Featured Products"} />;
};

export default FeaturedProducts;
