import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderNav from "./HeaderNav/HeaderNav";

import logo from "../../img/Logo.svg";
import search from "../../img/icons/search.svg";
import profile from "../../img/icons/profile.svg";
import shuffle from "../../img/icons/shuffle.svg";
import favorites from "../../img/icons/favorites.svg";
import cart from "../../img/icons/cart.svg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <div className={classes.frame}>
        <div className="container">
          <div className={classes.flex}>
            <div className={`${classes["grid__left"]} ${classes.logo}`}>
              <div className={classes.burger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a href="">
                <img src={logo} alt="" />
              </a>
            </div>
            <form
              action=""
              className={`${classes.from} ${classes["grid__medium"]}`}
            >
              <input type="text" className={classes.search} />
              <button className={classes.button}>All Categories</button>
              <button className="">
                <img src={search} alt="" />
              </button>
            </form>
            <div className={classes["grid__right"]}>
              <button>
                <img src={profile} alt="" />
              </button>
              <button>
                <img src={shuffle} alt="" />
              </button>
              <button>
                <img src={favorites} alt="" />
              </button>
              <button>
                <img src={cart} alt="" /> <div>$0.00</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <HeaderNav />
    </>
  );
};

export default Header;
