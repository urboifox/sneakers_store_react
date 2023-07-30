import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import FooterCols from "./FooterCols";

const Footer = () => {
  return (
    <footer className="bg-sec-400 py-10 text-white w-[100vw]">
      <div className="footerGrid container mx-auto ">
        <Link to="/">
          <img className="invert" src={logo} alt="sneakers logo" />
        </Link>
        <FooterCols
          heading="About"
          links={[
            {
              text: "About us",
              to: "/about",
            },
            {
              text: "Features",
              to: "/about",
            },
            {
              text: "News & Blog",
              to: "/about",
            },
          ]}
        />
        <FooterCols
          heading="Connect"
          links={[
            {
              text: "Linkedin",
              to: "https://www.linkedin.com/in/mohamed-ashraf-142659246/",
              blank: true,
            },
            {
              text: "Facebook",
              to: "https://www.facebook.com/profile.php?id=100008910966277",
              blank: true,
            },
            {
              text: "Github",
              to: "https://github.com/urboifox",
              blank: true,
            },
            {
              text: "Instagram",
              to: "https://www.instagram.com/_urboifox/",
              blank: true,
            },
          ]}
        />
        <FooterCols
          heading="Support"
          links={[
            {
              text: "FAQs",
              to: "/contact",
            },
            {
              text: "Support Center",
              to: "/contact",
            },
            {
              text: "Contact Us",
              to: "/contact",
            },
          ]}
        />
      </div>
      <small className="mx-auto block w-max mt-10">
        Made with ❤️ and ☕ by{" "}
        <Link
          className="text-primary-100"
          to="https://www.linkedin.com/in/mohamed-ashraf-142659246/"
          target="_blank"
        >
          Fox
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
