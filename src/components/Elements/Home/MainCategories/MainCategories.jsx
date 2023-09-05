import { useEffect, useState } from "react";
import classes from "./MainCategories.module.css";
import { Link, NavLink } from "react-router-dom";

const MainCategories = () => {
  const [categoryData, setCategoryData] = useState([]);

  const fentchCategoryData = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategoryData(data);
      });
  };

  useEffect(() => {
    fentchCategoryData();
  }, []);

  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.title}>
          <h2>Categories</h2>
        </div>
        {categoryData.length > 0 && (
          <div className={classes.grid}>
            {categoryData.map((category, index) => (
              <Link
                to={`category/${category}`}
                className={classes.categorie}
                key={index}
              >
                {category}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainCategories;
