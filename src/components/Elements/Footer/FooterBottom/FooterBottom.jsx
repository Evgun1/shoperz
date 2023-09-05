import classes from "./FooterBotton.module.css";

import Logo from "../../../../image/Logo.svg";
import Facebook from "../../../../image/icons/facebook.svg";
import Instagram from "../../../../image/icons/instagram.svg";
import inkedIn from "../../../../image/icons/inkedIn.svg";
import Twitter from "../../../../image/icons/twitter.svg";
import YouTube from "../../../../image/icons/youtube.svg";

import { Link } from "react-router-dom";

const arrayContact = [
  { title: "Headquarters", link: "Presei Square No45, Bucharest - 099455" },
  { title: "Email", link: "contact@shoperz.com" },
  { title: "Telephone", link: "(+40) 987 123 654" },
];

const arraySocialsNetworks = [
  { alt: "", src: Facebook },
  { alt: "", src: Instagram },
  { alt: "", src: inkedIn },
  { alt: "", src: Twitter },
  { alt: "", src: YouTube },
];

const arrayMenuColumn = [
  {
    title: "Categories",
    menu: [
      { label: "Smartphones", url: "category/smartphones" },
      { label: "Laptops", url: "category/laptops" },
      { label: "Fragrances", url: "category/fragrances" },
      { label: "Skincare", url: "category/skincare" },
    ],
  },
  {
    title: "Useful Links",
    menu: [
      { label: "About", url: "About" },
      { label: "Contact", url: "Contact" },
      { label: "Wishlist", url: "Wishlist" },
      { label: "Compare", url: "Compare" },
      { label: "FAQ", url: "FAQ" },
      { label: "Terms & Conditions", url: "Terms&Conditions" },
      { label: "Privacy Policy", url: "PrivacyPolicy" },
      { label: "Cookie Policy", url: "CookiePolicy" },
    ],
  },
  {
    title: "Customer Service",
    menu: [
      { label: "My Account", url: "MyAccount" },
      { label: "My Cart", url: "MyCart" },
      { label: "Track Order", url: "TrackOrder" },
      { label: "Returns & Exchanges", url: "Returns&Exchanges" },
      { label: "Repair Services", url: "RepairServices" },
      { label: "Support", url: "Support" },
    ],
  },
];

const FooterBottom = () => {
  return (
    <div className={"container"}>
      <div className={classes.grid}>
        <Contact />
        <Columns />
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className={classes.leftColumn}>
      <a className={classes.mainLink} href="/">
        <img className={classes.logo} src={Logo} alt="" />
      </a>
      <div className={classes.contact}>
        {arrayContact &&
          arrayContact.length &&
          arrayContact.map((contact, i) => (
            <div className={classes.mainContact} key={i}>
              <h3 className={classes.titleContact}>{contact.title}</h3>
              <Link className={classes.linkContact} to={contact.link}>{contact.link}</Link>
            </div>
          ))}
        <div className={classes.social}>
          {arraySocialsNetworks &&
            arraySocialsNetworks.length &&
            arraySocialsNetworks.map((data, ii) => (
              <a key={ii} href="">
                <img src={data.src} alt={data.alt} />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
const Columns = () => {
  return (
    <>
      {arrayMenuColumn &&
        arrayMenuColumn.length &&
        arrayMenuColumn.map((category, i) => (
          <div key={i} className={classes.column}>
            <h3>{category.title}</h3>
            <div className={classes.columnLink}>
              {category.menu &&
                category.menu.length &&
                category.menu.map((category, ii) => (
                  <Link to={category.url} key={ii}>{category.label}</Link>
                ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default FooterBottom;
