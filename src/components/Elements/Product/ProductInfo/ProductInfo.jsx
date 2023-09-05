import classes from "./ProductInfo.module.css";

const ProductInfo = ({ category, brand, title, rating, description }) => {
  return (
    <div className={classes.wraper}>
      <span>{category}</span>
      <h2 className={classes.title}>{title}</h2>
      <span>{rating}</span>
      <ul className={classes.list}>
        <li>{description}</li>
      </ul>
      <div className={classes.brand}>
        <h3>Brand</h3>
        <div>{brand}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
