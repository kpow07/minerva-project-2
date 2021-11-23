import { useEffect, useState } from "react";
import "./BioDetail.style.css";

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
          <h2>
            {bio.firstName} {bio.lastName}
          </h2>
          <div className="detail-fields">
            <div className="field-title">First Name: </div>
            <div className="field-value">{bio.firstName}</div>
            <div className="field-title">Last Name: </div>
            <div className="field-value">{bio.lastName}</div>
            <div className="field-title">Description: </div>
            <div className="field-value">{bio.description}</div>
            <div className="field-title">Science: </div>
            <div className="field-value">{bio.science}</div>
            <div className="field-title">Technology: </div>
            <div className="field-value">{bio.technology}</div>
            <div className="field-title">Engineering: </div>
            <div className="field-value">{bio.engineering}</div>
            <div className="field-title">Mathematics: </div>
            <div className="field-value">{bio.mathematics}</div>
            <div className="field-title">Bio:</div>
            <div className="field-value">{bio.bio}</div>
            <div className="field-title">Canadian: </div>
            <div className="field-value">{bio.canadian ? "Canadian" : ""}</div>
          </div>
        </>
      ) : null}
      {/* can add div with loading message  */}
    </div>
  );
};

export default BioDetail;
