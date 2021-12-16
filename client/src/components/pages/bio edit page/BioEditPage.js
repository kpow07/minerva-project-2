import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditBioForm from "../../forms/forms/EditBioForm";

function BioEditPage() {
  let navigate = useNavigate();
  let params = useParams();
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const fetchBio = async () => {
      let fetchResult = await fetch("/api/get-bio/" + params.id);
      let fetchedBio = await fetchResult.json();
      setBio(fetchedBio);
    };
    fetchBio();
  }, [params.id]);

  const UpdateBio = async function (updatedBio) {
    console.log(`updataing bio with id: ${params.id}`);
    await fetch(`/api/add-bio/${params.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBio),
    });
    navigate("/bio-gallery");
  };

  return (
    <div>
      <EditBioForm
        buttonValue={"UPDATE BIO"}
        existingValues={bio}
        fetchedId={params.id}
        titleValue={"Update STEM Bio"}
        onSave={UpdateBio}
      />
    </div>
  );
}

export default BioEditPage;
