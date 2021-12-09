import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../forms/FormStyles.css";

function CommentForm({ user, commentId, instructions }) {
  let params = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [userId, setUserId] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [commentParentId, setCommentParentId] = useState("");
  // console.log("the user is", user);

  useEffect(() => {
    const theDate = Date().toLocaleString();
    setDate(theDate);
    setMentorId(params.id);
    if (!commentParentId) {
      setCommentParentId("question");
    } else {
      setCommentParentId(commentParentId);
    }
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setUserId(user._id);
    }
  }, [user, params.id, commentParentId, commentId]);

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
    console.log("COMMENT INFO AND POST DATA", commentInfo, postData);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: postData,
    };
    const response = await fetch("/api/add-comment", requestOptions);
    const data = await response.json();
    console.log("this is the data", data);
  }
  return (
    <div>
      <label>
        {instructions}
        <br />
        <textarea
          className="multi-line-field-long"
          name="question"
          type="text"
          rows="4"
          placeholder="add comment..."
          required={true}
          wrap="hard"
          value={messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        />
      </label>
      <br />
      <input
        className="submit-button"
        type="button"
        value="SUBMIT"
        onClick={mySubmitFunction}
      />
    </div>
  );
}

export default CommentForm;
