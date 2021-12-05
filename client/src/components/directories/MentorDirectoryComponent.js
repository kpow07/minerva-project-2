import React from "react";
import { useEffect, useState } from "react";
import "./BioDirectory.style.css";
import "../bio-cards/portraitCard.style.css";
import PortraitCardComponent from "../bio-cards/PortraitCardComponent";

// const MentorMappingCardComponent = ({
//   firstName,
//   lastName,
//   description,
//   imageURL,
//   canadian,
//   science,
//   technology,
//   engineering,
//   mathematics,
//   onMentorSelected,
// }) => {
//   return (
//     <div className="science-bio-card" onClick={() => onMentorSelected()}>
//       <div className="science-upper-container">
//         {/* <img
//           className="science-portrait"
//           src={"/images/" + imageURL}
//           alt={firstName}
//           height="230px"
//           style={{ backgroundPosition: "center" }}
//         /> */}

//         <div className="science-image-container">
//           {/* <img
//             src="images/logos/beaker.png"
//             alt="logo"
//             width="25px"
//             height="25px"
//           /> */}
//         </div>
//       </div>
//       <div className="science-lower-container">
//         <h3>
//           {firstName} {lastName}{" "}
//           {canadian ? (
//             <img
//               id="mini-flag"
//               src="images/logos/flag.png"
//               style={{
//                 height: "20px",
//                 width: "30px",
//                 alignContent: "center",
//                 verticalAlign: "sub",
//               }}
//               alt="mini canadian flag"
//             />
//           ) : null}
//         </h3>
//         <div className="fields">
//           {science ? <h4 style={{ color: "orangeRed" }}>SCIENCE</h4> : null}{" "}
//           {technology ? <h4 style={{ color: "green" }}>TECHNOLOGY</h4> : null}{" "}
//           {engineering ? <h4 style={{ color: "blue" }}>ENGINEERING</h4> : null}{" "}
//           {mathematics ? <h4 style={{ color: "purple" }}>MATH</h4> : null}{" "}
//         </div>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };
//
const MentorDirectoryComponent = ({ setSelectedMentorId }) => {
  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching mentors data");
      let fetchResult = await fetch("/api/get-mentors");
      let mentorList = await fetchResult.json();
      console.log(mentorList);
      setMentors(mentorList);
    }
    fetchData();
  }, []);

  function selectMentor(id) {
    console.log("selectMentor called on id: ", id);
    setSelectedMentorId(id);
  }

  return (
    <div className="directory-menu">
      {mentors.map((mentor, index) => {
        return (
          <PortraitCardComponent
            className="card"
            key={index}
            onMentorSelected={() => selectMentor(mentor._id)}
            firstName={mentor.firstName}
            lastName={mentor.lastName}
            // imageURL={mentor.imageURL}
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
export default MentorDirectoryComponent;
