import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./diversity.png";

const Header = ({ user }) => {
  const logout = async () => {
    window.open("http://localhost:5001/auth/logout");
    window.parent.location.href = "/";
    window.close();
  };
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
              <Link to="/mentor-gallery">
                <button id="bigButton" className="button">
                  MENTOR GALLERY
                </button>
              </Link>
            </ul>
            <ul>
              <Link to="/bio-gallery">
                <button id="bigButton" className="button">
                  BIOGRAPHY GALLERY
                </button>
              </Link>
            </ul>
          </nav>
          <nav className="navMenu">
            <ul>
              <Link to="/mentor-add">
                <button id="bigButton" className="button">
                  BECOME A MENTOR
                </button>
              </Link>
            </ul>
            <ul>
              <Link to="/mentee-add">
                <button id="bigButton" className="button">
                  BECOME A MENTEE
                </button>
              </Link>
            </ul>
          </nav>
          <nav className="navMenu">
            <ul>
              <Link to="/mentee-fav">
                <button id="smallButton" className="button">
                  PROFILE
                </button>
              </Link>
            </ul>
            <ul>
              <Link to="/bio-create">
                <button id="smallButton" className="button">
                  ADD A BIO
                </button>
              </Link>
            </ul>
          </nav>
          <nav className="navMenu">
            <ul>
              <Link to="/">
                <button id="smallButton" className="button" href="/">
                  HOME
                </button>
              </Link>
            </ul>

            {user ? (
              <ul>
                <Link to="/login">
                  <button id="smallButton" className="button" onClick={logout}>
                    LOG OUT
                  </button>
                </Link>
              </ul>
            ) : (
              <ul>
                <Link to="/login">
                  <button id="smallButton" className="button" href="/login">
                    LOG IN
                  </button>
                </Link>
              </ul>
            )}
          </nav>
        </nav>
      </header>
    </div>
  );
};

export default Header;
