import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Social from "./hangingsocial.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerAddress">
        <h1 className="footerLogo"> MINERVA</h1>

        <h2>
          that's so fetch(💛) <br /> Michelle, Julie, Kate and Rita
        </h2>

        <address>
          404 InceptionU Lane, Calgary, AB H3H 3H3
          <br />
          <a className="footerButton" href="mailto:mentoring@minerva.com">
            Email Us
          </a>
        </address>
      </div>
      <ul className="footerNav">
        <li className="navItem">
          <h2 className="navTitle">Mentoring</h2>

          <ul className="navList">
            <Link to="/mentor">
              <li>Become a Mentor</li>
            </Link>

            <Link to="/mentee">
              <li>Become a Mentee</li>
            </Link>

            <li>Tell a Friend</li>
          </ul>
        </li>
        <li className="navItem">
          <h2 className="navTitle">Legal</h2>

          <ul className="navList">
            <li>Privacy Policy</li>

            <li>Terms of Use</li>

            <li>Sitemap</li>
          </ul>
        </li>
        <li className="navItem">
          <h2 className="navTitle">Connect With Us</h2>
          <ul className="navList">
            <li className="photo">
              <img src={Social} alt="social media" />
            </li>
          </ul>
        </li>
      </ul>
      <div className="bottom">
        <p>&copy; 2021 Project Two. All rights reserved.</p>

        <div className="bottomMessage">
          <span>
            when women support each other, incredible things happen{" "}
            <span className="heart">♥</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
