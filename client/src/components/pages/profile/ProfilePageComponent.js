import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AboutMe from "./AboutMe";
import ProfilePageCardDiv from "./ProfilePageCardDiv";
import "./ProfilePage.css"

// this will render the Mentor Card, About Me & Q&A and like button

function ProfilePageComponent({mentorId}) {
  const [mentor, setMentor] = useState("");
  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentor/" + mentorId);
      console.log("This is the mentor ID", mentorId);
      let fetchedMentor = await fetchResult.json();
      console.log("this is the dfetched mentor", fetchedMentor);
      setMentor(fetchedMentor);
    };
    fetchMentor();
  }, [mentorId]);


  return (
    
<div className="wrapper">
<div id="card-div-title" className="header">
          <h1>Mentor Profile Page</h1>
        </div> 
     
      <div className="sidebar">
        <ProfilePageCardDiv mentorId={params.id} />
      </div>
      <div className="content">
        <AboutMe mentorId={params.id} />
      </div>

     
   </div>
    
  );
};
export default ProfilePageComponent;
//fetch to take ID from URL , if the user wants to comment they need to pull it out of the URL and it pulls the name out of it
