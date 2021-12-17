import React from "react";
import MenteeForm from "../../forms/forms/MenteeForm";

function MenteeSignUpPage({ setGetUser}) {
  return (
    <div>
      <MenteeForm setGetUser={setGetUser}/>
    </div>
  );
}

export default MenteeSignUpPage;
