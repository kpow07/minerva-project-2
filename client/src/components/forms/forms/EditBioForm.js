import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import "./FormStyles.css";
import FieldOfStudyCheckboxComponent from "../form fields/FieldOfStudyCheckBoxComponent";
import DescriptionBioResourceComponent from "../form fields/DescriptionBioResourceComponent";
import FormTitleComponent from "../form fields/FormTitleComponent";
import FirstLastNameComponent from "../form fields/FirstLastNameFormComponent";
import ImageUpload from "../form fields/FileUploadComponent";

function EditBioForm({
  existingValues,
  fetchedId,
  titleValue,
  buttonValue,
  onSave,
}) {
  //set the beginning state for all variables
  let params = useParams();
  let id = params.id;
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
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("");
  const [cloudinary_id, setCloudinaryId] = useState("");

  let navigate = useNavigate();

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
      setImage(existingValues.image);
      setAvatar(existingValues.avatar);
      setCloudinaryId(existingValues.cloudinary_id);
    }
  }, [existingValues]); //this is called a guard, it will not touch the existing values unless the existing values are changed

  async function postData() {
    let formData = new FormData();
    try {
      let editBio = {
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
        avatar,
        cloudinary_id,
      };

      formData.append("fileProps", JSON.stringify(editBio));
      formData.append("image", image);

      const res = await fetch(`http://localhost:5001/api/add-bio/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        navigate("/bio-gallery");
      }
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="main-form">
      <FormTitleComponent title={"Edit Biography"} />

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
        value="SUBMIT"
        onClick={postData}
      />
    </div>
  );
}

export default EditBioForm;
