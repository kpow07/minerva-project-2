import React from "react";
import { useState, useEffect } from "react";
import "./FormStyles.css";
import FieldOfStudyCheckboxComponent from "../form fields/FieldOfStudyCheckBoxComponent";
import DescriptionBioResourceComponent from "../form fields/DescriptionBioResourceComponent";
import FormTitleComponent from "../form fields/FormTitleComponent";
import FirstLastNameComponent from "../form fields/FirstLastNameFormComponent";

function EditBioForm({ existingValues, fetchedId }) {
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
  const [id, setId] = useState("");

  //prepopulates the form with existing values of current bio
  useEffect(() => {
    if (existingValues) {
      setFirstName(existingValues.firstName);
      setLastName(existingValues.lastName);
      setCanadian(existingValues.canadian);
      setImageURL(existingValues.imageURL);
      setScience(existingValues.science);
      setTechnology(existingValues.technology);
      setEngineering(existingValues.engineering);
      setMathematics(existingValues.mathematics);
      setDescription(existingValues.description);
      setBio(existingValues.bio);
      setOtherResources(existingValues.otherResources);
      setId(existingValues.id);
    }
  }, [existingValues]);

  async function mySubmitUpdateFunction() {
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
      id,
    };
    //the data from the post will be JSON-type personalInfo from the form inputs.  Uncomment to see below
    const postData = JSON.stringify(personalInfo);
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: postData,
    };
    //reponse is from salling post request on add-mentor route using the request options above
    const response = await fetch(
      `/api/update-bio/${fetchedId}`,
      requestOptions
    );
    console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ${fetchedId}`);
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
      <FormTitleComponent title={"Update a STEM Bio"} />

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
        value="UPDATE"
        onClick={mySubmitUpdateFunction}
      />
    </div>
  );
}

export default EditBioForm;
