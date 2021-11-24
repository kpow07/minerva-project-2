import { useEffect, useState } from "react";
import "./Detail.style.css";

const BioDetail = ({ bioId }) => {
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const fetchBio = async () => {
      let fetchResult = await fetch("/api/get-bio/" + bioId);
      let fetchedBio = await fetchResult.json();
      setBio(fetchedBio);
    };
    fetchBio();
  }, [bioId]);

  return (
    <div className="rendered-bio">
      {bio ? (
        <>
          <h1>
            {bio.firstName} {bio.lastName}{" "}
            {bio.canadian ? (
              <img
                src="images/logos/flag.png"
                style={{ height: "30px", width: "40px" }}
                alt="mini canadian flag"
              />
            ) : null}
          </h1>
          <div className="detail-fields">
            <div className="fields">
              {bio.science ? (
                <h2 style={{ color: "orangeRed" }}>SCIENCE</h2>
              ) : null}{" "}
              {bio.technology ? (
                <h2 style={{ color: "green" }}>TECHNOLOGY</h2>
              ) : null}{" "}
              {bio.engineering ? (
                <h2 style={{ color: "blue" }}>ENGINEERING</h2>
              ) : null}{" "}
              {bio.mathematics ? (
                <h2 style={{ color: "purple" }}>MATH</h2>
              ) : null}{" "}
            </div>
            <h3 className="field-value">{bio.description}</h3>
            {/* <div className="field-title">Science: </div>
            <div className="field-value">{bio.science}</div>
            <div className="field-title">Technology: </div>
            <div className="field-value">{bio.technology}</div>
            <div className="field-title">Engineering: </div>
            <div className="field-value">{bio.engineering}</div>
            <div className="field-title">Mathematics: </div>
            <div className="field-value">{bio.mathematics}</div> */}
            <div className="field-title">Summary:</div>
            <div className="field-value">{bio.bio}</div>
            {/* <div className="field-title">Canadian: </div>
            <div className="field-value">{bio.canadian ? "Canadian" : ""}</div> */}
          </div>
        </>
      ) : null}
      {/* can add div with loading message  */}
    </div>
  );
};

export default BioDetail;
