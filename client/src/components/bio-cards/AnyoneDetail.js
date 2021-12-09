import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Detail.style.css";

const AnyoneDetail = ({ bioId, buttonLink }) => {
  const [bio, setBio] = useState(null);
  // let navigate = useNavigate();

  useEffect(() => {
    const fetchBio = async () => {
      let fetchResult = await fetch("/api/get-bio/" + bioId);
      let fetchedBio = await fetchResult.json();
      setBio(fetchedBio);
    };
    fetchBio();
  }, [bioId]);
  //

  return (
    <>
      <div className="rendered-bio">
        {bio ? (
          <>
            <Link to={buttonLink}>
              <button>EDIT</button>
            </Link>
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
          </>
        ) : null}
        {/* can add div with loading message  */}
      </div>
    </>
  );
};

export default AnyoneDetail;
