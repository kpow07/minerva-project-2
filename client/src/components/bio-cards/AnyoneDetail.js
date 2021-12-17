import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Detail.style.css";
import { useNavigate } from "react-router";

const AnyoneDetail = ({ bioId, buttonLink }) => {
  const [bio, setBio] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchBio = async () => {
      let fetchResult = await fetch("/api/get-bio/" + bioId);
      let fetchedBio = await fetchResult.json();
      setBio(fetchedBio);
    };
    fetchBio();
  }, [bioId]);
  //
  async function deleteBio(id) {
    console.log("FROM DELETE BIO FUNCTION");
    await fetch(`/api/delete-bio/` + id, {
      method: "DELETE",
    });
    console.log("Are you sure you want to DELETE Bio?", bioId);
    navigate("/bio-gallery");
  }
  return (
    <>
      <div className="rendered-bio">
        {bio ? (
          <>
            <h1>
              {bio.firstName} {bio.lastName}{" "}
              {bio.canadian ? (
                <img
                  src="/images/logos/flag.png"
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
            <Link to={buttonLink}>
              <button>EDIT</button>
            </Link>
            <Link to={buttonLink}>
              <button onClick={() => deleteBio(bio._id)}>DELETE</button>
            </Link>
          </>
        ) : null}
        {/* can add div with loading message  */}
      </div>
    </>
  );
};

export default AnyoneDetail;
