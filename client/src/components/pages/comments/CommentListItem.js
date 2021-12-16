import React from "react";
import { useState, useEffect } from "react";
import CommentButton from "./CommentButton";
import CommentForm from "./CommentForm";
import CommentReplyItem from "./CommentReplyItem";
import CommentEditForm from "./CommentEditForm";

function CommentListItem({
  commentQuestion,
  postedTime,
  poster,
  user,
  comment,
  commentId,
  buttonValue,
  UpdateComment,
}) {
  //determines whether or not reply box is showing
  const [showing, setShowing] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [childrenArray, setChildrenArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log(
        "Fetching children comments using commentId (parentId of replies",
        commentId
      );
      let fetchResult = await fetch(
        `/api/get-comment-children?parentId=${commentId}`
      );
      let childrenList = await fetchResult.json();
      setChildrenArray(childrenList);
    }
    fetchData();
  }, [commentId]);

  function showOrNot() {
    if (showing === true) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  }
  function showEditOrNot() {
    if (showEdit === true) {
      setShowEdit(false);
    } else {
      setShowEdit(true);
    }
  }

  return (
    <div className="comment-parent" style={{ border: "1px solid black" }}>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ display: "flex", flexDirection: "row" }}>
            on: {postedTime} by:{poster}{" "}
            <CommentButton value={buttonValue} showOrNot={showOrNot} />
            <CommentButton value="EDIT" showOrNot={showEditOrNot} />
          </p>
        </div>
        <h5 style={{ textAlign: "left", color: "blue" }}>{commentQuestion}</h5>
        {/* <CommentButton
          value={buttonValue}
          showOrNot={showOrNot}
          style={{ float: "left" }}
        />
        <CommentButton
          value="EDIT"
          showOrNot={showEditOrNot}
          style={{ float: "left" }}
        /> */}

        {childrenArray &&
          childrenArray.map((child, index) => {
            return (
              <CommentListItem
                style={{ marginLeft: "100px" }}
                key={index}
                postedTime={child.createdAt}
                poster={child.firstName}
                user={user}
                replyBody={child.messageBody}
                commentId={child?._id}
                buttonValue="comment"
                comment={child}
              />
            );
          })}

        {showing && !!comment ? (
          <CommentForm
            comment={comment}
            user={user}
            commentId={comment._id}
            parentId={comment._id}
            instructions="ANSWER THE QUESTION FOR THE MENTEE!!"
            buttonValue="SUBMIT ANSWER"
            existingValues={comment}
            onSave={UpdateComment}
          />
        ) : null}
        {showEdit && !!comment ? (
          <CommentEditForm
            commentId={comment._id}
            parentId={comment._id}
            instructions="EDIT YOUR COMMENT"
            buttonValue="SUBMIT ANSWER"
            existingValues={comment}
            onSave={UpdateComment}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CommentListItem;
