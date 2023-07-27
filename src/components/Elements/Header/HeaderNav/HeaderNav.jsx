import classes from "./HeaderNav.module.css";

const HeaderNav = () => {
  return (
    <div className={classes.frame}>
      <div className="container">
        <ul className={classes.list}>
          <li>
            <button className={classes.button}>TV & Audio</button>
          </li>
          <li>
            <button className={classes.button}>Smartphones</button>
          </li>
          <li>
            <button className={classes.button}>Laptops & PCs</button>
          </li>
          <li>
            <button className={classes.button}>Gadgets</button>
          </li>
          <li>
            <button className={classes.button}>Photo & Video</button>
          </li>
          <li>
            <button className={classes.button}>Gifts</button>
          </li>
          <li>
            <button className={classes.button}>Books</button>
          </li>
          <li>
            <button className={classes.button}>Toys</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNav;
