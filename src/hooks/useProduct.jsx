import { useEffect, useState } from "react";

const useProduct = (url) => {
  const [data, setData] = useState();

  const fetchProductsData = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const newProducts = data.products.map((product, index) => {
          const salePrice =
            product.price - product.price * (product.discountPercentage / 100);
          product.salePrice = salePrice.toFixed(2);
          return product;
        });
        setData(data);
      });
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return data;
};

export default useProduct;
