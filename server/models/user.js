import _default from "atob";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  displayName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: String },
  favorites:[String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


// export const User = mongoose.models.User || mongoose.model('User', User);
export default mongoose.model("User", UserSchema);

