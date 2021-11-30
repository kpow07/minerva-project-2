import { useEffect, useState } from "react";
import "./ScienceBioCard.style.css";

const ScienceMappingBioCardComponent = ({
  firstName,
  lastName,
  description,
  imageURL,
  canadian,
  science,
  technology,
  mathematics,
  engineering,
  s,
}) => {
  return (
    <div className="science-bio-card">
      <div className="science-upper-container">
        <img
          className="science-portrait"
          src={"/images/" + imageURL}
          alt={firstName}
          height="230px"
          style={{ backgroundPosition: "center" }}
        />

        <div className="science-image-container">
          <img
            src="images/logos/beaker.png"
            alt="logo"
            width="25px"
            height="25px"
          />
        </div>
      </div>
      <div className="science-lower-container">
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
          {technology ? <h4 style={{ color: "green" }}>TECHNOLOGY</h4> : null}{" "}
          {engineering ? <h4 style={{ color: "blue" }}>ENGINEERING</h4> : null}{" "}
          {mathematics ? <h4 style={{ color: "purple" }}>MATH</h4> : null}{" "}
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
      let scienceMentor = fetchMentor("science");
      let technologyMentor = fetchMentor("technology");
      let engineeringMentor = fetchMentor("engineering");
      let mathematicsMentor = fetchMentor("mathematics");
      let fourMentorsArray = [
        scienceMentor,
        technologyMentor,
        engineeringMentor,
        mathematicsMentor,
      ];
      console.log(`this is the four mentors array ${fourMentorsArray}`);
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
    <div className="directory-menu">
      {mentors.map((mentor, index) => {
        return (
          <ScienceMappingBioCardComponent
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
  );
};
export default LandingPageCardDiv;

//import Landingstyles from "/Landingpage.html";
//about us component

// const About = (img, title, description) => {
//   return (
//     <>
//       <img src=".c.a.casa" alt="advdavad" />
//       <h3>{title}</h3>;<p>{description}</p>
//     </>
//   );
// };

// const LandingPageBody = (props) => {
//   return (
//     <div id="body">
//       <About
//         className="section"
//         img=".forms/mint.jpeg"
//         title="About Us"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
//       />
//       <LandingPageCardDiv />
//     </div>
//   );
// };

// //style card in grid
// export default LandingPageBody;
