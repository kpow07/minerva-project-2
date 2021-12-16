import React from "react";
import { useState } from "react";
import MentorsFilterForm from "./MentorsFilterForm";
import MainMentorGallery from "./MainMentorGallery";
import TitleComponent from "../../title/TitleComponent";

function MentorPageComponent({ user, setUser }) {
  const [mentorsList, setMentorsList] = useState([]);
  const filterGetRequest = async function (city, field) {
    console.log(`Filtering Metors for FIELD: ${field} and CITY: ${city}`);
    let fetchResult = await fetch(
      `/api/filter-mentors-all?city=${city}&field=${field}`
    );
    let mentors = await fetchResult.json();
    setMentorsList(mentors);
    return mentorsList;
  };

  return (
    <div>
      <TitleComponent title="Mentor Gallery" />
      <MentorsFilterForm onSubmit={filterGetRequest} />
      <MainMentorGallery mentors={mentorsList} user={user} setUser={setUser} />
    </div>
  );
}

export default MentorPageComponent;
