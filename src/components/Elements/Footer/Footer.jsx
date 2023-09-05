import { useEffect } from "react";
import { useState } from "react";

import classes from "./Footer.module.css";
import FooterSubscriber from "./FooterSubscribe/FooterSubscriber";
import FooterCategory from "./FooterCategori/FooterCategory";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  const [logo, setLogo] = useState();
  useEffect(() => {
    fetch(
      "https://shopez-53fe0-default-rtdb.europe-west1.firebasedatabase.app/HomePage/GridLogo.json"
    )
      .then((res) => res.json())
      .then((json) => setLogo(json));
  }, []);

  return (
    <section>
      <div className="container">
        {logo ? (
          <div className={classes.gridLogo}>
            {logo.map((log, index) => (
              <img key={index} src={log.img.src} alt={log.img.alt} />
            ))}
          </div>
        ) : (
          <div>a</div>
        )}
      </div>
      <FooterCategory />
      <FooterSubscriber />
      <FooterBottom />
    </section>
  );
};

export default Footer;
