import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import AboutMe from "./AboutMe";
import ProfilePageCardDiv from "./ProfilePageCardDiv";
import "./ProfilePage.css";

// this will render the Mentor Card, About Me & Q&A and like button

function ProfilePageComponent({userId}) {
  const [mentor, setMentor] = useState();
  const [currentUser, setCurrentUser] = useState();

  let params = useParams();
  
  // console.log("this is the user being console logged", user)
  // console.log ("this is the current user id", user._id)
  // useEffect (()=>{ setCurrentUser(user)
  
  // // console.log ("this is the current user!!!!", currentUser._id)
  // }
  // )
 
  return (
    <div className="profile-page-wrapper">
      <div id="card-div-title" className="header">
        <h1>Mentor Profile Page</h1>
      </div>

      <div className="sidebar">
        <ProfilePageCardDiv
          mentorId={params.id}
          userId={userId}
          //  buttonLink={"/mentor-edit/" + params.id}
          // existingValues={existingValues}
        />
      </div>
      <div className="content">
        <AboutMe
          mentorId={params.id}
          buttonLink={"/mentor-edit/" + params.id}
          // existingValues={existingValues}
          buttonLink={"/mentor-delete/" + params.id}
        />
      </div>



      {/* <div>
       <MessageBoard className="footer"/>
     </div> */}
    </div>
  );
}
export default ProfilePageComponent;
//fetch to take ID from URL , if the user wants to comment they need to pull it out of the URL and it pulls the name out of it

