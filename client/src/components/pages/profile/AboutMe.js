import React from "react";
import { useEffect, useState } from "react";

// click on bio card to render profile page w/ About Me component
const AboutMe = ({ mentorId }) => {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentor/" + mentorId);
      console.log ("This is the mentor ID", mentorId)
      let fetchedMentor = await fetchResult.json();
      console.log ("this is the dfetched mentor", fetchedMentor)
      setMentor(fetchedMentor);
    };
    fetchMentor();
  }, [mentorId]);

  return ( 
    
    <div className="about-me">
      <h1> Hi, I'm {mentor.firstName}</h1>
    <p>
        {" "}
        I am a mentor in:
        {mentor.science ? (
          <h2 style={{ color: "orangeRed" }}>SCIENCE</h2>
        ) : null}{" "}
        {mentor.technology ? (
          <h2 style={{ color: "paleVioletRed" }}>TECHNOLOGY</h2>
        ) : null}{" "}
        {mentor.engineering ? (
          <h2 style={{ color: "darkBlue" }}>ENGINEERING</h2>
        ) : null}{" "}
        {mentor.mathematics ? <h2 style={{ color: "gold" }}>MATH</h2> : null}{" "}
      </p>
      <h2> About Me: </h2>
<p>{mentor.bio}</p>
      <h2> Here are some resources: </h2>
    <p>{mentor.otherResources}</p>
    </div>
  );
};

export default AboutMe;
