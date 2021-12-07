import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BioForm from "../../forms/forms/BioForm";

function BioEditPage() {
  let navigate = useNavigate();
  let params = useParams();
  let bioId = params.id;
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const fetchBio = async () => {
      let fetchResult = await fetch("/api/get-bio/" + bioId);
      let fetchedBio = await fetchResult.json();
      setBio(fetchedBio);
    };
    fetchBio();
  }, [bioId]);

  const UpdateBio = async function (updatedBio) {
    console.log(`updataing bio with id: ${bioId}`);
    await fetch(`/api/add-bio/${bioId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBio),
    });
    // navigate("/bio-detail/" + bioId);
    navigate("/bio-gallery");
  };

  return (
    <div>
      <BioForm
        buttonValue={"UPDATE BIO"}
        existingValues={bio}
        fetchedId={bioId}
        titleValue={"Update STEM Bio"}
        onSave={UpdateBio}
      />
    </div>
  );
}

export default BioEditPage;
