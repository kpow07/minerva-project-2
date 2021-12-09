import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

function CommentListItem({ commentQuestion, postedTime, poster }) {
  return (
    <div>
      <h4 style={{ textAlign: "left" }}>{commentQuestion}</h4>
      <div style={{ display: "inlineBlock" }}>
        <h5> on: {postedTime} </h5> <h5>by:{poster}</h5>
        <button style={{ marginLeft: "10px" }}>answer</button>
      </div>
    </div>
  );
}

/////////////////////////////////////////////60

function CommentComponent({ user }) {
  let params = useParams();
  const [commentsList, setCommentsList] = useState(null);
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching comment data");
      let fetchResult = await fetch(`/api/get-comments?mentorId=${params.id}`);
      let commentsList = await fetchResult.json();

      setCommentsList(commentsList);
    }
    fetchData();
  }, [params.id]);

  // function selectComment(mentord) {
  //   console.log("selectBio called on id: ", id);
  //   setSelectedBioId(id);
  // }
  console.log("comments list is currently: ", commentsList);
  return (
    <div style={{ backgroundColor: "white", opacity: "100%" }}>
      {commentsList &&
        commentsList.map((comment, index) => {
          return (
            <div style={{ backgroundColor: "white", opacity: "100%" }}>
              <CommentListItem
                // key={comment._id}
                key={index}
                commentQuestion={comment.messageBody}
                poster={comment.firstName}
                postedTime={comment.createdAt}
              />
              <CommentForm
                user={user}
                commentId={comment._id}
                instructions={"REPLY"}
              />
            </div>
          );
        })}
      <CommentForm
        user={user}
        commentId={null}
        instructions={"ADD NEW QUESTION OR COMMENT"}
      />
    </div>
  );
}

export default CommentComponent;
