import React from "react";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentListItem from "./CommentListItem";
import "./comments.css";

/////////////////////////////////////////////60

function CommentComponentLanding({ user, mentorId }) {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching comment data");
      let fetchResult = await fetch(
        `/api/get-mentor-comments?mentorId=${mentorId}`
      );
      let commentsList = await fetchResult.json();
      setCommentsList(commentsList);
    }
    fetchData();
  }, [mentorId]);
  //
  //
  //

  return (
    <div className="landing-comment-main-container">
      <CommentForm //JUST FOR THE INITIAL QUESTION, set the parentId to empty string
        user={user}
        commentParentId={""}
        style={{ justifyContents: "center" }}
        instructions="MESSAGE BOARD"
        buttonValue="SUBMIT QUESTION"
      />
      {commentsList &&
        commentsList
          .filter((comment) => comment.commentParentId === "none")
          .map((comment, index) => {
            return (
              <div>
                <CommentListItem
                  style={{ marginLeft: "20px" }}
                  key={index}
                  commentQuestion={comment.messageBody}
                  poster={comment.firstName}
                  postedTime={comment.createdAt}
                  user={user}
                  comment={comment}
                  commentId={comment._id}
                  commentChildren={comment.commentChildren}
                  buttonValue="REPLY"
                  // updateComment={updateComment}
                />
              </div>
            );
          })}
    </div>
  );
}

export default CommentComponentLanding;
