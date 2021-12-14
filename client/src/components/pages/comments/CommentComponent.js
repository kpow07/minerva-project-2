import React from "react";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentListItem from "./CommentListItem";

/////////////////////////////////////////////60

function CommentComponent({ user, mentorId }) {
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

  // const UpdateComment = async function (updatedComment) {
  //   console.log(`updataing comment with id: ${commentId}`);
  //   await fetch(`/api/add-comment/${commentId}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedComment),
  //   });
  // };

  return (
    <div style={{ backgroundColor: "white", opacity: "100%" }}>
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
                  // editFunction={editFunction}
                />
              </div>
            );
          })}
      <CommentForm //JUST FOR THE INITIAL QUESTION, set the parentId to empty string
        user={user}
        commentParentId={""}
        instructions="ASK A QUESTION TO THIS MENTOR!!"
        buttonValue="SUBMIT QUESTION"
      />
    </div>
  );
}

export default CommentComponent;
