import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./components/navigation/Footer";
import womenpic2 from "./women-background2-crop.png";
import Header from "./components/navigation/Header";
import MentorSignUpPage from "./components/pages/mentor-sign-up-page/MentorSignUpPage";
import MenteeSignUpPage from "./components/pages/mentee-sign-up-page/MenteeSignUpPage";
import LoginPage from "./components/pages/login page/LoginPage";
import LandingPageComponent from "./components/pages/landing page/LandingPageComponent";
import BioPageComponent from "./components/pages/bio page/BioPageCompoent";
import CreateBioPage from "./components/pages/add bio page/CreateBioPage";
import BioDetailPage from "./components/pages/bio detail page/BioDetailPage";
import BioEditPage from "./components/pages/bio edit page/BioEditPage";
import MentorPageComponent from "./components/pages/mentor page/MentorPageComponent";
import ProfilePageComponent from "./components/pages/profile/ProfilePageComponent";
import MentorEditPage from "./components/pages/mentor-edit-page/MentorEditPage";
import MenteeFavPage from "./components/pages/menteefavpage/MenteeFavPage";
//import EditMentorForm from "./components/forms/forms/EditMentorForm";
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
        <Route
          path="/"
          exact
          element={<LandingPageComponent user={user} setUser={setUser} />}
        />
        {/* MENTOR ROUTES */}
        <Route
          path="/mentor-add"
          element={user ? <MentorSignUpPage /> : <LoginPage />}
        />
        <Route
          path="/mentor-gallery"
          element={
            user ? (
              <MentorPageComponent user={user} setUser={setUser} />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/mentor-detail/:id"
          element={
            user ? (
              <ProfilePageComponent user={user} setUser={setUser} />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/mentor-edit/:id"
          // element={user ? <ProfilePageComponent /> : <LoginPage />}
          element={<MentorEditPage />}
        />
        {/* STEM BIO ROUTES */}
        <Route
          path="/bio-create"
          element={user ? <CreateBioPage /> : <LoginPage />}
        />
        <Route path="/bio-gallery" element={<BioPageComponent />} />
        <Route path="/bio-detail/:id" element={<BioDetailPage user={user} />} />
        <Route
          path="/bio-edit/:id"
          element={user ? <BioEditPage /> : <LoginPage />}
        />
        {/* MENTEE ROUTES */}
        <Route
          path="/mentee-add"
          element={user ? <MenteeSignUpPage /> : <LoginPage />}
        />
        <Route
          path="/mentee-fav"
          element={
            user ? (
              <MenteeFavPage user={user} setUser={setUser} />
            ) : (
              <LoginPage />
            )
          }
        />

        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/landing-page" element={<LandingPageComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
