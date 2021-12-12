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
  commentChildren: [String],
});
////////////////////////////////
const Comment = mongoose.model("Comment", commentSchema, "comment");

async function createComment(commentToCreate) {
  let newComment = new Comment(commentToCreate);
  console.log("from COMMENTS.js, new Comment", newComment);
  return newComment.save();
}

async function findCommentsByMentorId(mentorId) {
  let commentList = await Comment.find({ mentorId: mentorId });
  console.log("comments by mentor id", commentList);
  return commentList;
}
async function addToCommentChildren(parentId, commentId) {
  console.log("parent ID and comment Id", parentId, commentId.toString());
  let parentComment = await Comment.findOneAndUpdate(
    { _id: parentId },
    { $push: { commentChildren: commentId } }
  );
  // parentComment.push(commentId);
  return parentComment.save();
}

async function findCommentsById(id) {
  let commentList = await Comment.findMany({ _id: id });
  return commentList;
}
// async function findCommentsByParentId(id) {
//   let childComments = await Comment.find({ commentParentId: id });
//   console.log("these are the CHILDREN COMMENTS", childComments);
//   return childComments;
// }
async function findCommentsByCommentArray(parentId) {
  let childrenList = Comment.find({ commentParentId: parentId });
  console.log("FROM COMMENTS.JS HERE ARE THE CHILDREN", childrenList);
  return childrenList;
}
export {
  createComment,
  findCommentsByMentorId,
  addToCommentChildren,
  findCommentsById,
  // findCommentsByParentId,
  findCommentsByCommentArray,
};
