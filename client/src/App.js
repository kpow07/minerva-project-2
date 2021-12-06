import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/navigation/Footer";
import womenpic2 from "./women-background2-crop.png";
import Header from "./components/navigation/Header";
import MainBioGallery from "./components/pages/bio page/MainBioGallery";
import MainMentorGallery from "./components/pages/mentor page/MainMentorGallery";
import MentorForm from "./components/forms/forms/MentorForm";
import MenteeForm from "./components/forms/forms/MenteeForm";
import LoginPage from "./components/pages/login page/LoginPage";
import LandingPageCardDiv from "./components/pages/landing page/LandingPageCardDiv";
import AboutComponent from "./components/pages/landing page/AboutComponent";
import LandingPageComponent from "./components/pages/landing page/LandingPageComponent";
import MainBioGallery2 from "./components/pages/bio page/MainBioGallery2";
import BioPageComponent from "./components/pages/bio page/BioPageCompoent";
import AboutMe from "./components/pages/profile/AboutMe";
import ProfilePageComponent from "./components/pages/profile/ProfilePageComponent";
//import { useState } from "react";

//the main div of the app has kate's background image which will soon be edited for the new colour scheme
//footer is not functional yet
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5001/auth/login/success",
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          }
        );

        if (!response) throw new Error("Authentication failed!");

        const resObject = await response.json();
        setUser(resObject.user);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  console.log(user);

  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(" + womenpic2 + ")",
        backgroundSize: "contain",
        backgroundPositionY: "70%",
        backgroundPositionX: "center",

        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header user={user} />
      <Routes>
        <Route path="/" exact element={<LandingPageComponent />} />
        <Route path="/profile" element={<ProfilePageComponent />} />
        <Route path="/mentor" element={user ? <MentorForm /> : <LoginPage />} />
        <Route path="/mentee" element={user ? <MenteeForm /> : <LoginPage />} />
        <Route path="/mentor-gallery" element={<MainMentorGallery />} />
        <Route path="/bio-gallery" element={<MainBioGallery />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/landing"
          element={user ? <LandingPageCardDiv /> : <LoginPage />}
        />
        <Route
          path="/box"
          element={user ? <AboutComponent /> : <LoginPage />}
        />
        <Route
          path="/landingcombo"
          element={user ? <LandingPageComponent /> : <LoginPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
