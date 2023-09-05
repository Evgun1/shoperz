import classes from "../Header.module.css";

import search from "./search.svg";
import { useEffect, useState } from "react";

const SearchForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  // console.log(search);

  const [categoryData, setCategoryData] = useState([]);

  const fetchcategoryData = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((responsse) => {
        return responsse.json();
      })
      .then((data) => {
        setCategoryData(data);
      });
  };

  useEffect(() => {
    fetchcategoryData();
  }, []);

  return (
    <form
      action=""
      className={`${classes.from} ${classes["grid__medium"]}`}
      onSubmit={submitHandler}
    >
      <input type="text" className={classes.search} name="productName" />
      {categoryData.length > 0 && (
        <div className={classes.div}>
          <select
            id=""
            className={classes.select}
            defaultValue={"all"}
            name="productCategory"
          >
            <option value="all">All Categories</option>
            {categoryData.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}
      <button type="submit" className={classes.button}>
        <img className={classes.img_button} src={search} alt="" />
      </button>
    </form>
  );
};

export default SearchForm;
