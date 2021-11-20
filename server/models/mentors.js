import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  city: String,
  science: Boolean,
  technology: Boolean,
  engineering: Boolean,
  mathematics: Boolean,
  description: { type: String, required: true },
  bio: { type: String, required: true },
  other1: Boolean,
  other2: Boolean,
  other3: Boolean,
  other4: Boolean,
  other5: Boolean,
  other6: Boolean,
  other7: Boolean,
  other8: Boolean,
});
////////////////////////////////
const Mentor = mongoose.model("Mentor", mentorSchema, "mentor");

async function createMentor(mentorToCreate) {
  let newMentor = new Mentor(mentorToCreate);
  return newMentor.save();
}
////////////////////////////////
export { createMentor };
//module.exports = createMentor;