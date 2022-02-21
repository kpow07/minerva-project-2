import { useEffect, useState } from "react";
import "./Detail.style.css";

const MentorDetail = ({ mentorId }) => {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentor/" + mentorId);
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
            {mentor.firstName} {mentor.lastName}
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
                <h2 style={{ color: "paleVioletRed" }}>TECHNOLOGY</h2>
              ) : null}{" "}
              {mentor.engineering ? (
                <h2 style={{ color: "darkBlue" }}>ENGINEERING</h2>
              ) : null}{" "}
              {mentor.mathematics ? (
                <h2 style={{ color: "gold" }}>MATH</h2>
              ) : null}{" "}
            </div>
            <h3 className="field-value">{mentor.description}</h3>

            <div className="field-title">Summary:</div>
            <div className="field-value">{mentor.bio}</div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MentorDetail;
