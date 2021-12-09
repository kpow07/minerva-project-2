import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  mentorId: { type: String, required: true },
  userId: { type: String, required: true },
  messageBody: { type: String, required: true },
  commentParentId: { type: String, required: true },
});
////////////////////////////////
const Comment = mongoose.model("Comment", commentSchema, "comment");

async function createComment(commentToCreate) {
  let newComment = new Comment(commentToCreate);
  console.log("from COMMENTS.js, this is the new Comment", newComment);
  return newComment.save();
}
async function findCommentsByMentorId(id) {
  let commentList = await Comment.find({ mentorId: id });
  return commentList;
}
export { createComment, findCommentsByMentorId };
