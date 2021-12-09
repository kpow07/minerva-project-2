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
  image: { type: String, required: true },
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
  await Mentor.findByIdAndUpdate(id, newMentorInfo, {
    returnDocument: "after",
  });
}
async function listMentorsFilterField(field) {
  console.log(field);
  return Mentor.find({ [field]: true });
}
async function listMentorsFilterFieldCity(field, city) {
  console.log(`Filtering Mentors by Field: ${field} and City: ${city}`);
  return Mentor.find({ [field]: true, city: city });
}

async function listMentorsFilterCity(city) {
  console.log(city);
  if (city !== "nothing") {
    return Mentor.find({ city: city });
  } else {
    return Mentor.find({});
  }
}
// async function listMentorsFilterAll(field, city) {
//   console.log(`filtering ${field} mentors who live in ${city}`);
//   if (field === "" && city === "") {
//     return await Mentor.find({});
//   } else if (field === "" && city !== "") {
//     await Mentor.find({ city: city });
//   } else if (field === "science" && city !== "") {
//     return await Mentor.find({ city: city, science: true });
//   } else if (field === "technology" && city !== "") {
//     return await Mentor.find({ city: city, technology: true });
//   } else if (field === "engineering" && city !== "") {
//     return await Mentor.find({ city: city, engineering: true });
//   } else if (field === "mathematics" && city !== "") {
//     return await Mentor.find({ city: city, mathematics: true });
//   }
// }
// async function filterMentors(field, city) {
//   let mentors = await listMentorsFilterAll(field, city);
//   console.log(mentors);
// }

////////////////////////////////
export {
  createMentor,
  listMentors,
  findMentorById,
  listMentorsFilterField,
  listMentorsFilterCity,
  listMentorsFilterFieldCity,
  updateMentor,
};
