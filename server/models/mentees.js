import mongoose from "mongoose";

const menteeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  city: String,
  province: String,
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
  other9: Boolean,
  other10: Boolean,
  other11: Boolean,
  ////////////////////
});
////////////////////////////////
const Mentee = mongoose.model("Mentee", menteeSchema, "mentee");

async function createMentee(menteeToCreate) {
  let newMentee = new Mentee(menteeToCreate);
  return newMentee.save();
}

async function findMenteeById(id) {
  return Mentee.findById(id);
}
async function updateMentee(id, newMenteeInfo) {
  await Mentee.findByIdAndUpdate(id, newMenteeInfo);
}


// async function getMenteeInfo(id) {
//   let menteeInfo = await findMenteeById(id);
//   return menteeInfo;
// }

////////////////////////////////
export { createMentee, findMenteeById, updateMentee };
