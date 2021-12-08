import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
////////////////////////////////
const Comments = mongoose.model("Comments", menteeSchema, "comments");
