import ProductsSlider from "../../../Layouts/ProductsSlider/ProductsSlider";
import classes from "./Bestsellers.module.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useProduct from "../../../../hooks/useProduct";

const MainBestsellers = () => {
  const products = useProduct("https://dummyjson.com/products?limit=10&skip=0&select=title,price,discountPercentage,category,images")
  return (
    <section className={classes.section}>
      <div className="container">

      <ProductsSlider products={products} title={"Bestsellers"} />

      <div className={classes.bottom}>
        <Link className={`${classes.bottom_elem} ${classes.bottom_elemFirst}`}>
          <h3>
            PORTABLE SPEAKERS COLLECTION <b>2023</b>
          </h3>
        </Link>
        <Link className={`${classes.bottom_elem} ${classes.bottom_elemLast}`}>
          <h3>
            ALL ACCESSORIES FOR <b>GAMERS</b>
          </h3>
        </Link>
      </div>
      </div>

    </section>
  );
};

export default MainBestsellers;
