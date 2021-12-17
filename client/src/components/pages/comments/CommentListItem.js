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
  updateComment,
}) {
  //determines whether or not reply box is showing
  const [showing, setShowing] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [childrenArray, setChildrenArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // console.log(
      //   "Fetching children comments using commentId (parentId of replies",
      //   commentId
      // );
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
    <div className="comment-parent">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px auto 2px auto",
          }}
        >
          <p
            className="comment-info"
            style={{ display: "flex", flexDirection: "row" }}
          >
            on: {new Date(postedTime).toLocaleTimeString('en-ca',{month: "long", day:"numeric", year:"numeric"})} by:{poster}{" "}
            <CommentButton
              className="comment-button"
              value={buttonValue}
              showOrNot={showOrNot}
            />
            {user?._id === comment.userId ? (
              <CommentButton
                className="comment-button"
                value="EDIT"
                showOrNot={showEditOrNot}
              />
            ) : null}
          </p>
        </div>
        <h4 className="comment-body">{commentQuestion}</h4>

        {childrenArray &&
          childrenArray.map((child, index) => {
            return (
              <CommentReplyItem
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
            onSave={updateComment}
          />
        ) : null}
        {showEdit && !!comment ? (
          <CommentEditForm
            commentId={comment._id}
            parentId={comment._id}
            instructions="EDIT YOUR COMMENT"
            buttonValue="SUBMIT ANSWER"
            existingValues={comment}
            onSave={updateComment}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CommentListItem;
