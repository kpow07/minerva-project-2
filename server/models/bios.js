import mongoose from "mongoose";

const bioSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  science: Boolean,
  technology: Boolean,
  engineering: Boolean,
  mathematics: Boolean,
  canadian: Boolean,
  description: String,
  bio: String,
  imageURL: String,
  OtherResources: String,
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});
const Bio = mongoose.model("Bio", bioSchema, "bio");

async function createBio(BioToCreate) {
  let newBio = new Bio(BioToCreate);
  return newBio.save();
}
async function listBios() {
  return Bio.find({});
}

async function findBioById(id) {
  return Bio.findById(id);
}

/////////////////////
export { createBio, listBios, findBioById };
