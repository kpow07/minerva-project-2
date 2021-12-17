import React from "react";
import { useState } from "react";
import "./FormStyles.css";
import FieldOfStudyCheckboxComponent from "../form fields/FieldOfStudyCheckBoxComponent";
import PersonalInfoComponent from "../form fields/PersonalInfoComponent";
import OtherAreasCheckboxComponent from "../form fields/OtherAreasCheckboxComponent";
import DescriptionBioResourceComponent from "../form fields/DescriptionBioResourceComponent";
import FormTitle from "../form fields/FormTitleComponent";
import AdditionalCheckboxWithFieldComponent from "../form fields/AdditionalCheckboxWithFieldComponent"; //addition
import { useNavigate } from "react-router-dom";

function MenteeForm({ setGetUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [science, setScience] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [mathematics, setMathematics] = useState(false);
  const [description, setDescription] = useState("");
  const [bio, setBio] = useState("");
  const [otherResources, setOtherResources] = useState("");
  const [other1, setOther1] = useState(false);
  const [other2, setOther2] = useState(false);
  const [other3, setOther3] = useState(false);
  const [other4, setOther4] = useState(false);
  const [other5, setOther5] = useState(false);
  const [other6, setOther6] = useState(false);
  const [other7, setOther7] = useState(false);
  const [other8, setOther8] = useState(false);
  const [other9, setOther9] = useState(false); //addition
  const [other10, setOther10] = useState(""); //addition
  const [other11, setOther11] = useState(false); //addition

  let navigate = useNavigate();

  async function mySubmitFunction() {
    const personalInfo = {
      firstName,
      lastName,
      city,
      province,
      email,
      science,
      technology,
      engineering,
      mathematics,
      description,
      bio,
      otherResources,
      other1,
      other2,
      other3,
      other4,
      other5,
      other6,
      other7,
      other8,
      other9, //addition
      other10, //addition
      other11, //addition
    };

    const postData = JSON.stringify(personalInfo);

    console.log(personalInfo);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: postData,
    };
    const response = await fetch("/api/add-mentee", requestOptions);
    const data = await response.json();
    navigate("/mentor-gallery");
    console.log(data);
    setGetUser(new Date());
    //response.text
  }

  return (
    <div className="main-form">
      <FormTitle title={"Become a Mentee!"} />

      <PersonalInfoComponent
        values={{ firstName, lastName, email, city, province }}
        setters={{ setFirstName, setLastName, setEmail, setCity, setProvince }}
      />
      <FieldOfStudyCheckboxComponent
        values={{ science, technology, engineering, mathematics }}
        setters={{
          setScience,
          setTechnology,
          setEngineering,
          setMathematics,
        }}
      />
      <DescriptionBioResourceComponent
        values={{ description, bio, otherResources }}
        setters={{ setDescription, setBio, setOtherResources }}
      />
      <OtherAreasCheckboxComponent
        values={{
          other1,
          other2,
          other3,
          other4,
          other5,
          other6,
          other7,
          other8,
        }}
        setters={{
          setOther1,
          setOther2,
          setOther3,
          setOther4,
          setOther5,
          setOther6,
          setOther7,
          setOther8,
        }}
      />
      <AdditionalCheckboxWithFieldComponent
        values={{
          other9,
          other10,
          other11,
        }}
        setters={{
          setOther9,
          setOther10,
          setOther11,
        }}
      />

      <input
        className="submit-button"
        type="button"
        value="SUBMIT"
        onClick={mySubmitFunction}
      />
    </div>
  );
}

export default MenteeForm;
