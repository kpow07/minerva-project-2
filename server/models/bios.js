import mongoose from "mongoose";

const BiosSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  field: {
    type: String,
    enum: ["Science", "Technology", "Engineering", "Mathematics"],
  },
  birthday: { type: Date, required: true },
  briefDescription: { type: String, required: true },
  Bio: { type: String, required: true },
  imageURL: { type: String, required: true },
  OtherResources: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Bios", BiosSchema);
