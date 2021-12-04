import { useEffect, useState } from "react";
import "./ScienceDirectory.style.css"; //This is the styling for the div around the cards.  also used in other files
import "./landingPageCard.style.css"; //this css is specific to landing page cards
//
//
//
//This is the card component specific to the landing page
const PortraitCardComponent = ({
  firstName,
  lastName,
  description,
  // imageURL = "/images/mentors/mentor28.jpg",
  imageURL = "/images/mentors/Eugenia-Duodu-web.jpeg",
  canadian,
  science,
  technology,
  mathematics,
  engineering,
}) => {
  return (
    <div className="portrait-bio-card">
      <div className="portrait-upper-container">
        <img
          className="portrait-portrait"
          src={imageURL}
          alt={firstName}
          width="210px"
        />
      </div>
      <div className="portrait-lower-container">
        <div className="logo-container">
          {science ? (
            <div className="image-container" id="science-image-container">
              <img
                id="science-landing-card"
                src="images/logos/beaker.png"
                alt="logo"
                style={{ width: "35px", height: "35px" }}
              />
            </div>
          ) : null}
          {technology ? (
            <div className="image-container" id="technology-image-container">
              <img
                id="technology-landing-card"
                src="images/logos/computer.png"
                alt="logo"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </div>
          ) : null}
          {engineering ? (
            <div className="image-container" id="engineering-image-container">
              <img
                id="engineering-landing-card"
                src="images/logos/gears.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
          {mathematics ? (
            <div className="image-container" id="mathematics-image-container">
              <img
                id="mathematics-landing-card"
                src="images/logos/pi-symbol.png"
                alt="logo"
                style={{ width: "44px", height: "44px" }}
              />
            </div>
          ) : null}
        </div>
        <h3>
          {firstName} {lastName}{" "}
          {canadian ? (
            <img
              id="mini-flag"
              src="images/logos/flag.png"
              style={{
                height: "20px",
                width: "30px",
                alignContent: "center",
                verticalAlign: "sub",
              }}
              alt="mini canadian flag"
            />
          ) : null}
        </h3>
        <div className="fields">
          {science ? <h4 style={{ color: "orangeRed" }}>SCIENCE</h4> : null}{" "}
          {technology ? (
            <h4 style={{ color: "paleVioletRed" }}>TECHNOLOGY</h4>
          ) : null}{" "}
          {engineering ? (
            <h4 style={{ color: "darkBlue" }}>ENGINEERING</h4>
          ) : null}{" "}
          {mathematics ? (
            <h4 style={{ color: "darkGoldenrod" }}>MATH</h4>
          ) : null}{" "}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const LandingPageCardDiv = ({ setSelectedBioId }) => {
  const [mentors, setMentors] = useState([]);
  const generateRandomIndex = (array) =>
    Math.floor(Math.random() * array.length);
  //
  useEffect(() => {
    const fetchMentor = async function (field) {
      console.log("Fetching mentor's data");
      let fetchResult = await fetch(`/api/filter-mentors?field=${field}`);
      let mentorArray = await fetchResult.json();
      let randomIndex = generateRandomIndex(mentorArray);
      return mentorArray[randomIndex];
    };
    async function fetchFourMentorsData() {
      console.log("Fetching data for 4 cards on landing page");
      let scienceMentor = await fetchMentor("science");
      let technologyMentor = await fetchMentor("technology");
      let engineeringMentor = await fetchMentor("engineering");
      let mathematicsMentor = await fetchMentor("mathematics");
      let fourMentorsArray = [
        scienceMentor,
        technologyMentor,
        engineeringMentor,
        mathematicsMentor,
      ];

      setMentors(fourMentorsArray);
    }

    fetchFourMentorsData();
  }, []);
  //replace this later with link to mentorgallery
  // function selectBio(id) {
  //   console.log("selectBio called on id: ", id);
  //   setSelectedBioId(id);s
  // }

  return (
    <div>
      <div className="directory-menu">
        <div id="card-div-title" className="menu-title">
          <h1>Meet Our Mentors!</h1>
        </div>
        {mentors.map((mentor, index) => {
          return (
            <PortraitCardComponent
              className="card"
              key={index}
              firstName={mentor.firstName}
              lastName={mentor.lastName}
              imageURL={mentor.imageURL}
              description={mentor.description}
              canadian={mentor.canadian}
              science={mentor.science}
              technology={mentor.technology}
              engineering={mentor.engineering}
              mathematics={mentor.mathematics}
            />
          );
        })}
      </div>
    </div>
  );
};
export default LandingPageCardDiv;
