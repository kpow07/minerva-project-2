import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../forms/FormStyles.css";

function CommentEditForm({
  parentId,
  instructions,
  buttonValue,
  existingValues,
  comment,
  fetchedId,
  onSave,
}) {
  let params = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [userId, setUserId] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [commentParentId, setCommentParentId] = useState("");

  useEffect(() => {
    if (existingValues) {
      const theDate = Date().toLocaleString();
      setDate(theDate);
      setMentorId(existingValues.mentorId);
      if (parentId) {
        setCommentParentId(existingValues.parentId);
      } else {
        setCommentParentId("none");
      }
      setFirstName(existingValues.firstName);
      setLastName(existingValues.lastName);
      setUserId(existingValues.userId);
    }
  }, [existingValues, parentId]);

  const udateComment = async function (updatedComment) {
    console.log(`updataing bio with id: ${existingValues.commentId}`);
    await fetch(`/api/add-bio/${existingValues.commentId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComment),
    });
  };

  async function postData() {
    const newComment = {
      firstName,
      lastName,
      date,
      mentorId,
      userId,
      messageBody,
      commentParentId,
    };
    await onSave(newComment);
    console.log("saving new comment", newComment);
  }
  // console.log("COMMENT INFO AND POST DATA", commentInfo, postData);

  /////////////////////////////////////////////////////////////

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
          value={existingValues.messageBody}
          onChange={(e) => setMessageBody(e.target.value)}
        />
      </label>
      <br />
      <input
        className="submit-button"
        type="button"
        value={buttonValue}
        // onClick={updateComment()}
      />
    </div>
  );
}
export default CommentEditForm;
