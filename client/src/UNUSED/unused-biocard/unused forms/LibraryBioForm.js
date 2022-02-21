import React from "react";
import { useState } from "react";
import "./FormStyles.css";
import FieldOfStudyCheckboxComponent from "../../../components/forms/form fields/FieldOfStudyCheckBoxComponent";
import DescriptionBioResourceComponent from "../../../components/forms/form fields/DescriptionBioResourceComponent";
import FormTitleComponent from "../../../components/forms/form fields/FormTitleComponent";
import FirstLastNameComponent from "../../../components/forms/form fields/FirstLastNameFormComponent";

function LibraryBioForm() {
  //set the beginning state for all variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [canadian, setCanadian] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [science, setScience] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [mathematics, setMathematics] = useState(false);
  const [description, setDescription] = useState("");
  const [bio, setBio] = useState("");
  const [otherResources, setOtherResources] = useState("");

  async function mySubmitFunction() {
    //declare keys in personalInfo Object
    const personalInfo = {
      firstName,
      lastName,
      canadian,
      imageURL,
      science,
      technology,
      engineering,
      mathematics,
      description,
      bio,
      otherResources,
    };
    //the data from the post will be JSON-type personalInfo from the form inputs.  Uncomment to see below
    const postData = JSON.stringify(personalInfo);
    // console.log(personalInfo);

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: postData,
    };
    //reponse is from salling post request on add-mentor route using the request options above
    const response = await fetch("/api/add-bio", requestOptions);
    //data is the new object that was sent to the database
    const data = await response.json();
    console.log(data);
    //response.text
  }
  //form title component:  you can set the name of the form here to be what you want
  //personal info component:  values and setters of those values are passed in here
  // this component for bios has an added canadian field, as well as an image url
  //field of study component: values and setters of those values are passed in here
  //Description bio resource component:     ""
  //Other Areas checkbox component:      ""
  //Submit button
  return (
    <div className="main-form">
      <FormTitleComponent title={"Add a Famous Women of STEM Bio!"} />

      <FirstLastNameComponent
        values={{ firstName, lastName, canadian, imageURL }}
        setters={{ setFirstName, setLastName, setCanadian, setImageURL }}
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

      <input
        className="submit-button"
        type="button"
        value="SUBMIT"
        onClick={mySubmitFunction}
      />
    </div>
  );
}

export default LibraryBioForm;
