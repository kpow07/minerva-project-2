import React from "react";
import { useEffect, useState } from "react";
import FieldOfStudyCheckboxComponent from "./field-of-study-checkbox.component";
import PersonalInfoComponent from "./personal-info.component";

function MasterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [science, setScience] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [mathematics, setMathematics] = useState(false);

  const mySubmitFunction = () => {
    console.log(
      `should create mentee:
      firstName = ${firstName},
      lastName = ${lastName},
      email= ${email},
      city= ${city}
      science= ${science},
      technology= ${technology},
      engineering = ${engineering},
      mathematics = ${mathematics}`
    );
  };
  return (
    <div>
      <PersonalInfoComponent
        values={{ firstName, lastName, email, city }}
        setters={{ setFirstName, setLastName, setEmail, setCity }}
      />
      <FieldOfStudyCheckboxComponent
        science={science}
        technology={technology}
        engineering={engineering}
        mathematics={mathematics}
      />
      <input type="button" value="SUBMIT" onClick={mySubmitFunction} />
    </div>
  );
}

export default MasterForm;
