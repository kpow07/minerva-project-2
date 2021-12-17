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
  const [commentId, setCommentId] = useState(existingValues._id);
  const [messageBody, setMessageBody] = useState("");
  const [commentParentId, setCommentParentId] = useState("");
  const [newCommentBody, setNewCommentBody] = useState(
    existingValues.messageBody
  );

  useEffect(() => {
    if (existingValues) {
      const theDate = Date().toLocaleString();
      setDate(theDate);
      setMessageBody(existingValues.messageBody);
      setMentorId(existingValues.mentorId);
      if (parentId) {
        setCommentParentId(existingValues.parentId);
      } else {
        setCommentParentId("none");
      }
      setFirstName(existingValues.firstName);
      setLastName(existingValues.lastName);
      setUserId(existingValues.userId);
      setCommentId(existingValues._id);
    }
  }, [existingValues, parentId]);

  const updateComment = async function () {
    const newComment = {
      messageBody,
    };
    console.log(`updataing comment with id: ${commentId}`);
    await fetch(`/api/update-comment/${commentId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
  };
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
          placeholder="Edit comment..."
          required={true}
          wrap="hard"
          value={newCommentBody}
          onChange={(e) => setNewCommentBody(e.target.value)}
        />
      </label>
      <br />
      <input
        className="submit-button"
        type="button"
        value={buttonValue}
        onClick={() => updateComment()}
      />
    </div>
  );
}
export default CommentEditForm;
