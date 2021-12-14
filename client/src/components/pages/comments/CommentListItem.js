import React from "react";
import { useState, useEffect } from "react";
import CommentButton from "./CommentButton";
import CommentForm from "./CommentForm";
import CommentReplyItem from "./CommentReplyItem";

function CommentListItem({
  commentQuestion,
  postedTime,
  poster,
  user,
  comment,
  commentId,
  buttonValue,
}) {
  //determines whether or not reply box is showing
  const [showing, setShowing] = useState(false);
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

  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        <div style={{ display: "inlineFlex" }}>
          <h5>
            on: {postedTime} by:{poster}
          </h5>
        </div>
        <h5 style={{ textAlign: "left", color: "blue" }}>
          {commentQuestion}
          <CommentButton value={buttonValue} showOrNot={showOrNot} />
        </h5>

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
            user={user}
            commentId={comment._id}
            parentId={comment._id}
            instructions="ANSWER THE QUESTION FOR THE MENTEE!!"
            buttonValue="SUBMIT ANSWER"
          />
        ) : null}
      </div>
    </div>
  );
}

export default CommentListItem;
