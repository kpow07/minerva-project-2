import React from "react";
import "./CommentButton.css";

function CommentButton({ buttonId, showOrNot, value }) {
  return (
    <div>
      <button
        className="comment-button"
        buttonId={buttonId}
        style={{ marginLeft: "3px" }}
        onClick={showOrNot}
      >
        {value}
      </button>
    </div>
  );
}

export default CommentButton;
