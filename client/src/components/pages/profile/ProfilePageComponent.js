import React from "react";
import { useNavigate, useParams } from "react-router";
import AboutMe from "./AboutMe";
import ProfilePageCardDiv from "./ProfilePageCardDiv";
import "./ProfilePage.css"

// this will render the Mentor Card, About Me & Q&A and like button

function ProfilePageComponent() {
 
  let navigate = useNavigate();
  let params = useParams();


  return (
    
<div className="wrapper">
<div id="card-div-title" className="header">
          <h1>Mentor Profile Page</h1>
        </div> 
     
      <div className="sidebar">
        <ProfilePageCardDiv mentorId={params.id} />
      </div>
      {/* <div className="content">
        <AboutMe mentorId={mentorId} />
      </div> */}

      <div className="content">
        <AboutMe mentorId={mentorId} />
      </div>


    </div>
  
  
    
  );
}
export default ProfilePageComponent;
//fetch to take ID from URL , if the user wants to comment they need to pull it out of the URL and it pulls the name out of it
