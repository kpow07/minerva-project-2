import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import BioDetail from "./components/directories/BioDetail";
import Footer from "./components/nav-bar/Footer";
// import womenpic from "./women-background-crop.png";
import womenpic2 from "./women-background2-crop.png";

// import LibraryBioForm from "./components/forms/LibraryBioForm";

import Header from "./components/nav-bar/Header";
//import MainBioGallery from "./components/pages/MainBioGallery";
import MainMentorGallery from "./components/pages/MainMentorGallery";

//
//
//
//
//
//the main div of the app has kate's background image which will soon be edited for the new colour scheme
//footer is not functional yet
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(" + womenpic2 + ")",
        backgroundSize: "contain",
        backgroundPositionY: "70%",
        backgroundPositionX: "center",

        height: "100vh",
        // width: "auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <Routes>
        {/* <Route path="/" exact element={<MainBioGallery />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
