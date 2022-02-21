import mongoose from "mongoose";
// import connectDB from "../config/db";
// connectDB();

const mentorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  city: String,
  province: String,
  science: Boolean,
  technology: Boolean,
  engineering: Boolean,
  mathematics: Boolean,
  avatar: { type: String },
  cloudinary_id: { type: String },
  description: { type: String, required: true },
  otherResources: String,
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
  other10: { type: String },
  other11: Boolean,
  // image: { type: String, required: true },
  ////////////////////
});
////////////////////////////////
const Mentor = mongoose.model("Mentor", mentorSchema, "mentor");

async function createMentor(mentorToCreate) {
  let newMentor = new Mentor(mentorToCreate);
  return newMentor.save();
}

async function findMentorById(id) {
  let mentor = await Mentor.findById(id);
  return mentor;
}

async function listMentors() {
  return Mentor.find({});
}

async function updateMentor(id, newMentorInfo, obj) {
  const mentor = await Mentor.findByIdAndUpdate(id, newMentorInfo, obj);
  await mentor.save();
  return mentor;
}

async function listMentorsFilterField(field) {
  return Mentor.find({ [field]: true });
}
async function listMentorsFilterFieldCity(field, city) {
  return Mentor.find({ [field]: true, city: city });
}

async function listMentorsFilterCity(city) {
  if (city !== "nothing") {
    return Mentor.find({ city: city });
  } else {
    return Mentor.find({});
  }
}

function removeMentor(id) {
  return Mentor.findByIdAndDelete(id);
}

////////////////////////////////
export {
  createMentor,
  listMentors,
  findMentorById,
  listMentorsFilterField,
  listMentorsFilterCity,
  listMentorsFilterFieldCity,
  updateMentor,
  removeMentor,
};
