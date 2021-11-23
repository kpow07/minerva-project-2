import React from "react";
import "./App.css";
// import BioDetail from "./components/directories/BioDetail";
import Footer from "./components/nav-bar/Footer";
import womenpic from "./women-background-crop.png";
import LibraryBioForm from "./components/forms/LibraryBioForm";
import MentorForm from "./components/forms/MentorForm";
// import MainBioGallery from "./components/directories/usingDB/MainBioGallery";

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
      {/* <MainBioGallery /> */}
      {/* <LibraryBioForm /> */}
      <MentorForm />
      <Footer />
    </div>
  );
}

export default App;
