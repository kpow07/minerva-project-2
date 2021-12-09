import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentButton from "./CommentButton";

function CommentListItem({
  commentQuestion,
  postedTime,
  poster,
  user,
  comment,
  buttonId,
}) {
  const [showing, setShowing] = useState(false);
  function showOrNot() {
    if (showing === true) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  }
  return (
    <>
      <div>
        <h4 style={{ textAlign: "left" }}>{commentQuestion}</h4>
        <h5> on: {postedTime} </h5> <h5>by:{poster}</h5>
        <p> {answers}</p>


        <CommentButton
          buttonId={buttonId}
          showOrNot={showOrNot}
          value={"reply"}
        />
      </div>
      <div>
        {showing && !!comment ? ( 
          <CommentForm
            user={user}
            commentId={comment._id}
            instructions={"REPLY!"}
          />
        ) : null}
      </div>
    </>
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

  console.log("comments list is currently: ", commentsList);
  return (
    <div style={{ backgroundColor: "white", opacity: "100%" }}>
      {commentsList &&
        commentsList.map((comment, index) => {
          return (
            <div style={{ backgroundColor: "white", opacity: "100%" }}>
              <CommentListItem
                key={index}
                commentQuestion={comment.messageBody}
                poster={comment.firstName}
                postedTime={comment.createdAt}
                buttonId={index}
                user={user}
                comment={comment}
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
