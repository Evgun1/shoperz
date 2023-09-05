import Subtract from "../../../../image/icons/SubtractSuscribe.svg";

import classes from "./FooterSubscriber.module.css";

const FooterSubscriber = () => {
  return (
    <div className={classes.wraper}>
      <div className="container">
        <div className={classes.container}>
          <p>
            <b>Subscribe to Our Newsletter</b> - get a <b>$20 Coupon </b>for
            your first order!{" "}
          </p>
          <form action="" className={classes.form}>
            <input type="text" />
            <button className={classes.button}>
              <img src={Subtract} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscriber;
