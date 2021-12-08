import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditMentorForm from "../../forms/forms/EditMentorForm";

function MentorEditPage() {
  let navigate = useNavigate();
  let params = useParams();
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchMentor = async () => {
      let fetchResult = await fetch("/api/get-mentor/" + params.id);
      let fetchedMentor = await fetchResult.json();
      setMentor(fetchedMentor);
    };
    fetchMentor();
  }, [params.id]);

  const UpdateMentor = async function (updatedMentor) {
    console.log(`updataing mentor with id: ${params.id}`);
    await fetch(`/api/add-mentor/${params.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMentor),
    });
    // navigate("/mentor-detail/" + mentorId);
    navigate("/mentor-gallery");
  };
  console.log("LINE 34 mentor edit page", mentor);
  return (
    <div>
      <EditMentorForm
        buttonValue={"UPDATE MENTOR"}
        existingValues={mentor}
        fetchedId={params.id}
        titleValue={"Update Mentor"}
        onSave={UpdateMentor}
      />
    </div>
  );
}

export default MentorEditPage;
