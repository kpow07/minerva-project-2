import mongoose from "mongoose";
// import connectDB from "../config/db";
// connectDB();

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
  other9: Boolean,
  other10: Boolean,
  other11: Boolean,
  image: Buffer,

  ////////////////////
});
////////////////////////////////
const Mentor = mongoose.model("Mentor", mentorSchema, "mentor");

async function createMentor(mentorToCreate) {
  let newMentor = new Mentor(mentorToCreate);
  return newMentor.save();
}

async function findMentorById(id) {
  return Mentor.findById(id);
}

async function listMentors() {
  return Mentor.find({});
}
async function updateMentor(id, newMentorInfo) {
  await Mentor.findByIdAndUpdate(id, newMentorInfo);
}

async function listMentorsFilterField(field) {
  console.log(field);
  if (field === "science") {
    console.log(field);
    return Mentor.find({ science: true });
  } else if (field === "technology") {
    return Mentor.find({ technology: true });
  } else if (field === "engineering") {
    return Mentor.find({ engineering: true });
  } else if (field === "mathematics") {
    return Mentor.find({ mathematics: true });
  } else return Mentor.find({});
}
async function listMentorsFilterFieldCity(field, city) {
  return Mentor.find({ [field]: true, city: city });
}

async function listMentorsFilterCity(city) {
  console.log(city);
  if (city !== "") {
    return Mentor.find({ city: city });
  } else {
    return Mentor.find({});
  }
}
async function listMentorsFilterAll(field, city) {
  console.log(`filtering ${field} mentors who live in ${city}`);
  if (field === "" && city === "") {
    return await Mentor.find({});
  } else if (field === "" && city !== "") {
    await Mentor.find({ city: city });
  } else if (field === "science" && city !== "") {
    return await Mentor.find({ city: city, science: true });
  } else if (field === "technology" && city !== "") {
    return await Mentor.find({ city: city, technology: true });
  } else if (field === "engineering" && city !== "") {
    return await Mentor.find({ city: city, engineering: true });
  } else if (field === "mathematics" && city !== "") {
    return await Mentor.find({ city: city, mathematics: true });
  }
}
async function filterMentors(field, city) {
  let mentors = await listMentorsFilterAll(field, city);
  console.log(mentors);
}

////////////////////////////////
export {
  createMentor,
  listMentors,
  findMentorById,
  listMentorsFilterField,
  listMentorsFilterCity,
  listMentorsFilterAll,
  listMentorsFilterFieldCity,
  updateMentor,
  filterMentors,
  
};
