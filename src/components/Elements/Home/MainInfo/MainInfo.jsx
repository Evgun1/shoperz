import classes from "./MainInfo.module.css";

import Guarantee from "../../../../image/icons/guarantee.svg";
import Rate_Paying from "../../../../image/icons/rate_paying.svg";
import Payments from "../../../../image/icons/payments.svg";
import Free_Delivery from "../../../../image/icons/free_delivery.svg";
import Brands from "../../../../image/icons/brands.svg";

const DATA = [
  {
    img: {
      src: Guarantee,
      alt: "",
    },
    title: "Guarantee",
    text: "24 Months",
  },
  {
    img: {
      src: Rate_Paying,
      alt: "",
    },
    title: "Rate Paying",
    text: "4 - 12 Months",
  },
  {
    img: {
      src: Payments,
      alt: "",
    },
    title: "Payments",
    text: "Secured",
  },
  {
    img: {
      src: Free_Delivery,
      alt: "",
    },
    title: "Free Delivery",
    text: "from $100",
  },
  {
    img: {
      src: Brands,
      alt: "",
    },
    title: "Brands",
    text: "Only Top",
  },
];

const MainInfo = () => {
  return (
    <section className={classes.frame}>
      <div className="container">
        <div className={classes.container}>
          {DATA &&
            DATA.length &&
            DATA.map((data, index) => (
              <div key={index} className={classes.elem}>
                <img src={data.img.src} alt={data.img.alt} />
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
