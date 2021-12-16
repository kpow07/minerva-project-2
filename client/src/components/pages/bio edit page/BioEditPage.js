import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditBioForm from "../../forms/forms/EditBioForm";

function BioEditPage() {
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

  return (
    <div>
      <EditBioForm
        buttonValue={"UPDATE BIO"}
        existingValues={bio}
        fetchedId={params.id}
        titleValue={"Update STEM Bio"}
      />
    </div>
  );
}

export default BioEditPage;
