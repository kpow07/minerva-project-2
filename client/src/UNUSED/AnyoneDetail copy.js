import { useEffect, useState } from "react";
import "./Detail.style.css";
import BioForm from "../components/forms/forms/BioForm";

const AnyoneDetail = ({ bioId }) => {
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const fetchBio = async () => {
      let fetchResult = await fetch("/api/get-bio/" + bioId);
      let fetchedBio = await fetchResult.json();
      setBio(fetchedBio);
    };
    fetchBio();
  }, [bioId]);
  //
  const UpdateBio = async function (updatedBio) {
    console.log(`updataing bio with id: ${bioId}`);
    await fetch(`/api/add-bio/${bioId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBio),
    });
  };

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
                <h2 style={{ color: "paleVioletRed" }}>TECHNOLOGY</h2>
              ) : null}{" "}
              {bio.engineering ? (
                <h2 style={{ color: "darkBlue" }}>ENGINEERING</h2>
              ) : null}{" "}
              {bio.mathematics ? (
                <h2 style={{ color: "goldegnRod" }}>MATH</h2>
              ) : null}{" "}
            </div>
            <h3 className="field-value">{bio.description}</h3>
            <div className="field-title">Summary:</div>
            <div className="field-value">{bio.bio}</div>
          </div>
        </>
      ) : null}
      {/* can add div with loading message  */}
      <BioForm
        buttonValue={"UPDATE BIO"}
        existingValues={bio}
        fetchedId={bioId}
        titleValue={"Update a STEM Bio"}
        onSave={UpdateBio}
      />
    </div>
  );
};

export default AnyoneDetail;
