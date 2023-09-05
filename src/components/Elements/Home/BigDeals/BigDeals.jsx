import { useEffect, useState } from "react";
import ProductsSlider from "../../../Layouts/ProductsSlider/ProductsSlider";
import useProduct from "../../../../hooks/useProduct";

const BigDeals = () => {
  const products = useProduct(
    "https://dummyjson.com/products?limit=10&skip=20&select=category,title,price,discountPercentage,images"
  );
  return (
    <ProductsSlider
      products={products}
      title={"Big Deals"}
      showSalePrice={true}
    />
  );
};

export default BigDeals;
