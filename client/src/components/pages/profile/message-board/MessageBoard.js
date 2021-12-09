import React from "react";
// import CommentForm from "./CommentForm"
// import CommentList from "./CommentList"
// import CommentBox from "./CommentBox"
// import "./ProfilePage.css";

const MessageBoard = () => {
  state = {};
  render();
  return <div>Hello {this.props.name}</div>;

  <div className="wrapper">
    <div id="card-div-title" className="header">
      <h1>Message Board</h1>
    </div>

    <div className="sidebar">
      <CommentForm addComment={this.addComment}/>
    </div>
    <div className="content">
      <CommentList
      loading={this.state.loading}
      comments={this.state.comments} />

      <div className="footer">
        <CommentBox />
      </div>
    </div>
  </div>;
};

export default MessageBoard;
