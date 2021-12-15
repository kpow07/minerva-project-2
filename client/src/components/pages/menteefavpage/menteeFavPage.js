import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProfilePageCardDiv from "./ProfilePageCardDiv";
import "./menteeFavPage.css"
import MainMentorGallery from "../mentor page/MainMentorGallery";


// this will render the Mentee favs in a gallery

function menteeFavPage() {
  let params = useParams();

  return (
    <div className="wrapper">
      <div id="card-div-title" className="header">
        <h1>Mentee Profile Page</h1>
        <h2>Below are your favorite mentors you have selected from the Mentor Biography gallery</h2>
      </div>

    
      <div className="content">
        <MainMentorGallery />
      </div>

      
    </div>
  );
}
export default menteeFavPage;