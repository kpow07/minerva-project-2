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
async function updateBio(id, newBioInfo) {
  await Bio.findByIdAndUpdate(id, newBioInfo, { returnDocument: "after" });
}
async function listBiosFilterField(field) {
  console.log(field);
  return Mentor.find({ [field]: true });
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
    console.log(
      `FROM BIOS.js: Filtering bios where canadian = ${canadian} in the ${field} field`
    );
    return Bio.find({ [field]: true, canadian: isCanadian });
  } else if (canadian === "nothing") {
    return Bio.find({ [field]: true });
  }
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
};
