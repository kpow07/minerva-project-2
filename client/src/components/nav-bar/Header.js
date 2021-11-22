import React from "react";
import "./Header.css";
import Logo from "./diversity.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <ul className="photo">
          <img src={Logo} alt="women" />
        </ul>
        <h1 className="headerMain">
          Minerva
          <br />
          <p className="headerSecond">Mentorship</p>
        </h1>
        <nav className="mainNav">
          <nav className="navMenu">
            <ul>
              <a className="button" href="/mentor">
                BECOME A MENTOR
              </a>
            </ul>
            <ul>
              <a className="button" href="/mentee">
                BECOME A MENTEE
              </a>
            </ul>
          </nav>
          <nav className="navMenu">
            <ul>
              <a className="button" href="/">
                HOME
              </a>
            </ul>
            <ul>
              <a className="button" href="/login">
                LOG IN
              </a>
            </ul>
          </nav>
        </nav>
      </header>
    </div>
  );
};

export default Header;
