import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  displaName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    max: 100,
    min: 8,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isEnabled: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("Users", UserSchema);

export { User };
