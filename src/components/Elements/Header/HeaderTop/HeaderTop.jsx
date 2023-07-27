import language from "../../../img/icons/language.svg";
import currency from "../../../img/icons/currency.svg";
import facebook from "../../../img/icons/facebook.svg";
import instagram from "../../../img/icons/instagram.svg";
import linkedIn from "../../../img/icons/inkedIn.svg";
import twitter from "../../../img/icons/twitter.svg";
import youtube from "../../../img/icons/youtube.svg";
import track from "../../../img/icons/track.svg";
import shop from "../../../img/icons/shop.svg";
import settings from "../../../img/icons/settings.svg";

import classes from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <div className={classes.frame}>
      <div className="container">
        <div className={classes.flex}>
          <div className={classes.row}>
            <button className={`${classes.button} ${classes.button__left}`}>
              <img src={language} alt="" />
              <div>Language</div>
            </button>
            <button className={`${classes.button} ${classes.button__left}`}>
              <img src={currency} alt="" />
              <div>Currency</div>
            </button>
          </div>
          <div className={classes.row}>
            <div className={classes.link}>
              <a href="">
                <img src={facebook} alt="" />
              </a>
              <a href="">
                <img src={instagram} alt="" />
              </a>
              <a href="">
                <img src={linkedIn} alt="" />
              </a>
              <a href="">
                <img src={twitter} alt="" />
              </a>
              <a href="">
                <img src={youtube} alt="" />
              </a>
            </div>
            <div className={classes.row}>
              <button className={`${classes.button} ${classes.button__right}`}>
                <img src={track} alt="" />
                <div>Track Order</div>
              </button>
              <button className={`${classes.button} ${classes.button__right}`}>
                <img src={shop} alt="" />
                <div>Shop</div>
              </button>
              <button className={`${classes.button} ${classes.button__right}`}>
                <img src={settings} alt="" />
                <div>Settings</div>
              </button>
              <div className={`${classes.button} ${classes.button__right}`}>FAQ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
