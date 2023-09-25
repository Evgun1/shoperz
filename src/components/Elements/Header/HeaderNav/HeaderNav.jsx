import { useEffect, useState } from "react";
import classes from "./HeaderNav.module.css";
import { NavLink, useFetcher } from "react-router-dom";

const HeaderNav = () => {
  const [category, setCategory] = useState([]);

  const fetchCategoryData = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategory(data);
      });
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <div className={classes.frame}>
      <div className="container">
        {category.length > 0 && (
          <ul className={classes.list}>
            <li><NavLink className={classes.button} to={'/shop'}>Shop</NavLink></li>
            {category.map((category, index) => (
              <li key={index}>
                <NavLink style={{ textTransform: 'capitalize' }} className={classes.button} to={`category/${category}`}>{category}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderNav;
