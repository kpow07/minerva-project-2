import React from "react";
import { useNavigate } from "react-router-dom";
import BioForm from "../../forms/forms/BioForm";

const CreateBioPage = function () {
  let navigate = useNavigate();
  const createBio = async function (newBio) {
    console.log(`adding bio with id: ${newBio.id}`);
    await fetch("/api/add-bio", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBio),
    });
    navigate("/bio-gallery");
  };

  return (
    <div>
      <BioForm
        buttonValue={"SUBMIT BIO"}
        onSave={createBio}
        titleValue={"Add a New STEM Bio"}
      />
    </div>
  );
};

export default CreateBioPage;
