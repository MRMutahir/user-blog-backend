import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    max: 1000,
  },
  description: {
    type: String,
    max: 1000,
  },
  usersID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
    index: true,
  },
  isEnabled: {
    type: Boolean,
    default: true,
  },
});

const Post = mongoose.model("Posts", PostSchema);

export { Post };
