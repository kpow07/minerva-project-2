import mongoose from "mongoose";

const bioSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  avatar: { type: String },
  cloudinary_id: { type: String },
  science: Boolean,
  technology: Boolean,
  engineering: Boolean,
  mathematics: Boolean,
  canadian: Boolean,
  description: String,
  bio: String,
  // imageURL: String,
  otherResources: String,
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
  let bio = await Bio.findById(id);
  return bio;
}
async function updateBio(id, newBioInfo, obj) {
  const bio = await Bio.findByIdAndUpdate(id, newBioInfo, obj);
  await bio.save();
  return bio;
}

async function listBiosFilterField(field) {
  return Bio.find({ [field]: true });
}
async function listBiosFilterCanadian(canadian) {
  if (canadian === "true") {
    return Bio.find({ canadian: true });
  } else return Bio.find({});
}
async function listBiosFilterFieldCanadian(field, canadian) {
  let isCanadian;
  if (canadian === "true") {
    isCanadian = true;
    return Bio.find({ [field]: true, canadian: isCanadian });
  } else if (canadian === "nothing") {
    return Bio.find({ [field]: true });
  }
}

function removeBio(id) {
  return Bio.findByIdAndDelete(id);
}
/////////////////////
export {
  createBio,
  listBios,
  findBioById,
  updateBio,
  listBiosFilterField,
  listBiosFilterCanadian,
  listBiosFilterFieldCanadian,
  removeBio,
};
