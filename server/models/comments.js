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
  return newComment.save();
}
async function updateComment(id, newMessageBody) {
  const message = await Comment.findOneAndUpdate(
    { _id: id },
    { $set: { messageBody: newMessageBody } },
    { new: true }
  );
  await message.save();
  return message;
}
async function findCommentsByMentorId(mentorId) {
  let commentList = await Comment.find({ mentorId: mentorId });
  return commentList;
}

async function addToCommentChildren(parentId, commentId) {
  let parentComment = await Comment.findOneAndUpdate(
    { _id: parentId },
    { $push: { commentChildren: commentId } }
  );
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
  return childrenList;
}
export {
  createComment,
  findCommentsByMentorId,
  addToCommentChildren,
  findCommentsById,
  updateComment,
  // findCommentsByParentId,
  findCommentsByCommentArray,
};
