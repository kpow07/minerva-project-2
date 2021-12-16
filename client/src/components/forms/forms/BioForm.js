import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FormStyles.css";
import FieldOfStudyCheckboxComponent from "../form fields/FieldOfStudyCheckBoxComponent";
import DescriptionBioResourceComponent from "../form fields/DescriptionBioResourceComponent";
import FormTitleComponent from "../form fields/FormTitleComponent";
import FirstLastNameComponent from "../form fields/FirstLastNameFormComponent";
import ImageUpload from "../form fields/FileUploadComponent";

function BioForm({
  existingValues,
  fetchedId,
  titleValue,
  buttonValue,
  onSave,
}) {
  //set the beginning state for all variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [canadian, setCanadian] = useState(false);
  const [science, setScience] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [mathematics, setMathematics] = useState(false);
  const [description, setDescription] = useState("");
  const [bio, setBio] = useState("");
  const [otherResources, setOtherResources] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("");
  const [cloudinary_id, setCloudinary_id] = useState("");

  let navigate = useNavigate();

  //prepopulates the form with existing values of current bio
  useEffect(() => {
    if (existingValues) {
      setFirstName(existingValues.firstName);
      setLastName(existingValues.lastName);
      setCanadian(existingValues.canadian);
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

  async function postData() {
    let newBio = new FormData();
    try {
      const personalInfo = {
        firstName,
        lastName,
        canadian,
        science,
        technology,
        engineering,
        mathematics,
        description,
        bio,
        otherResources,
        id,
        avatar,
        cloudinary_id,
      };

      newBio.append("fileProps", JSON.stringify(personalInfo));
      newBio.append("image", image);

      const res = await fetch("http://localhost:5001/api/add-bio", {
        method: "POST",
        body: newBio,
      });
      if (res.ok) {
        //setName("");
        //setImage("");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   await onSave(newBio);
  //   console.log(`saving bio ${newBio}`);
  // }

  //form title component:  you can set the name of the form here to be what you want
  //personal info component:  values and setters of those values are passed in here
  // this component for bios has an added canadian field, as well as an image url
  //field of study component: values and setters of those values are passed in here
  //Description bio resource component:     ""
  //Other Areas checkbox component:      ""
  //Submit button
  return (
    <div className="main-form">
      <FormTitleComponent title={titleValue} />

      <FirstLastNameComponent
        values={{ firstName, lastName, canadian }}
        setters={{ setFirstName, setLastName, setCanadian }}
      />
      <ImageUpload values={{ image }} setters={{ setImage }} />
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
        value={buttonValue}
        onClick={postData}
      />
    </div>
  );
}

export default BioForm;
