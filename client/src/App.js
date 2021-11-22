import React from "react";
import "./App.css";
// import BioDetail from "./components/directories/BioDetail";
import Footer from "./components/nav-bar/Footer";
import womenpic from "./women-background-crop.png";
import MainBioGallery from "./components/directories/usingDB/MainBioGallery";
import Header from "./components/nav-bar/Header";

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
        backgroundImage: "url(" + womenpic + ")",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Header />
      <MainBioGallery />
      <Footer />
    </div>
  );
}

export default App;
