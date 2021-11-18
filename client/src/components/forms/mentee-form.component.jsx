import React from "react";
import { useEffect, useState } from "react";

function MenteeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [science, setScience] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [mathematics, setMathematics] = useState(false);
  const [biography, setBiography] = useState("");

  const mySubmitFunction = () => {
    console.log(
      `should create mentee:
      firstName = ${firstName},
      lastName = ${lastName},
      email= ${email},
      city= ${city},
      science= ${science},
      technology= ${technology},
      engineering = ${engineering},
      mathematics = ${mathematics}`
    );
  };
  return (
    <container>
      <div className="main-personal-data">
        <div className="personal-info">
          <label>
            First Name:
            <input
              name="firstName"
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div className="personal-info">
          <label>
            Lasts Name:
            <input
              name="lastName"
              type="text"
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div className="personal-info">
          <label>
            Email Address:
            <input
              name="email"
              type="text"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="personal-info">
          <label>
            City:
            <input
              name="city"
              type="text"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="field-checkbox-component">
        <div className="field-area">
          <label>
            Science:
            <input
              name="science"
              type="checkbox"
              value="science"
              onChange={(e) => setScience(e.target.checked)}
            />
          </label>
        </div>
        <div className="field-area">
          <label>
            Technology:
            <input
              name="technology"
              type="checkbox"
              value="technology"
              onChange={(e) => setTechnology(e.target.checked)}
            />
          </label>
        </div>
        <div className="field-area">
          <label>
            Engineering:
            <input
              name="engineering"
              type="checkbox"
              value="engineering"
              onChange={(e) => setEngineering(e.target.checked)}
            />
          </label>
        </div>
        <div className="field-area">
          <label>
            Mathematics:
            <input
              name="mathematics"
              type="checkbox"
              value="mathematics"
              onChange={(e) => setMathematics(e.target.checked)}
            />
          </label>
        </div>
      </div>
      <div className="large-textfield">
        <label>
          Biography:
          <input
            name="biography"
            type="text"
            value={biography}
            onChange={(e) => setBiography(e.target.checked)}
            placeholder="Tell us about yourself"
          />
        </label>
      </div>

      <input type="submit" value="newMentee" onClick={mySubmitFunction} />
    </container>
  );
}

export default MenteeForm;
