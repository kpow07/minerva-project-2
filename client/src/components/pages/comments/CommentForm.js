import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../forms/FormStyles.css";

function CommentForm({ user, parentId, instructions, buttonValue }) {
  let params = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [userId, setUserId] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [commentParentId, setCommentParentId] = useState("");

  useEffect(() => {
    const theDate = Date().toLocaleString();
    setDate(theDate);
    setMentorId(params.id);
    if (parentId) {
      setCommentParentId(parentId);
    } else {
      setCommentParentId("none");
    }
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setUserId(user._id);
    }
  }, [user, params.id, parentId]);

  // console.log(firstName, "is the current user", date, "is the date");
  async function mySubmitFunction() {
    const commentInfo = {
      firstName,
      lastName,
      date,
      mentorId,
      userId,
      messageBody,
      commentParentId,
    };
    const postData = JSON.stringify(commentInfo);
    // console.log("COMMENT INFO AND POST DATA", commentInfo, postData);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: postData,
    };
    window.location.reload();
    const response = await fetch("/api/add-comment", requestOptions);
    const data = await response.json();
    console.log("this is the data returned from the form", data);

    /////////////////////////////////////////////////////////////
  }
  return (
    <div>
      <label>
        {instructions}
        <br />
        <textarea
          id="first-question"
          name="question"
          type="text"
          rows="4"
          placeholder="Ask a question..."
          required={true}
          wrap="hard"
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        />
      </label>
      <br />
      <input
        className="comment-submit-button"
        type="button"
        value={buttonValue}
        onClick={mySubmitFunction}
      />
    </div>
  );
}

export default CommentForm;
