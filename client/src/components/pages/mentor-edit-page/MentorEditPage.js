import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditMentorForm from "../../forms/forms/EditMentorForm";

function MentorEditPage() {
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

  return (
    <div>
      <EditMentorForm
        buttonValue={"UPDATE MENTOR"}
        existingValues={mentor}
        fetchedId={params.id}
        titleValue={"Update Mentor"}
      />
    </div>
  );
}

export default MentorEditPage;
