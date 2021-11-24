import { useEffect, useState } from "react";
import "./Detail.style.css";

const MentorDetail = ({ mentorId }) => {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentors/" + mentorId);
      let fetchedMentor = await fetchResult.json();
      setMentor(fetchedMentor);
    };
    fetchMentor();
  }, [mentorId]);

  return (
    <div className="rendered-bio">
      {mentor ? (
        <>
          <h1>
            {mentor.firstName} {mentor.lastName}{" "}
            {mentor.canadian ? (
              <img
                src="images/logos/flag.png"
                style={{ height: "30px", width: "40px" }}
                alt="mini canadian flag"
              />
            ) : null}
          </h1>
          <div className="detail-fields">
            <div className="fields">
              {mentor.science ? (
                <h2 style={{ color: "orangeRed" }}>SCIENCE</h2>
              ) : null}{" "}
              {mentor.technology ? (
                <h2 style={{ color: "green" }}>TECHNOLOGY</h2>
              ) : null}{" "}
              {mentor.engineering ? (
                <h2 style={{ color: "blue" }}>ENGINEERING</h2>
              ) : null}{" "}
              {mentor.mathematics ? (
                <h2 style={{ color: "purple" }}>MATH</h2>
              ) : null}{" "}
            </div>
            <h3 className="field-value">{mentor.description}</h3>
            {/* <div className="field-title">Science: </div>
            <div className="field-value">{mentor.science}</div>
            <div className="field-title">Technology: </div>
            <div className="field-value">{mentor.technology}</div>
            <div className="field-title">Engineering: </div>
            <div className="field-value">{mentor.engineering}</div>
            <div className="field-title">Mathematics: </div>
            <div className="field-value">{mentor.mathematics}</div> */}
            <div className="field-title">Summary:</div>
            <div className="field-value">{mentor.bio}</div>
            {/* <div className="field-title">Canadian: </div>
            <div className="field-value">{mentor.canadian ? "Canadian" : ""}</div> */}
          </div>
        </>
      ) : null}
      {/* can add div with loading message  */}
    </div>
  );
};

export default MentorDetail;
