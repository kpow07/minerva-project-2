import React from "react";

function CommentButton({ buttonId, showOrNot, value }) {
  return (
    <div>
      <button
        buttonId={buttonId}
        style={{ marginLeft: "10px" }}
        onClick={showOrNot}
      >
        {value}
      </button>
    </div>
  );
}

export default CommentButton;
