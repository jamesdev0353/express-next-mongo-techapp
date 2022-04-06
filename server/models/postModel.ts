import mongoose from "mongoose";
import { IPost } from "./interface";

const Schema = mongoose.Schema;
const postSchema = new mongoose.Schema<IPost>({
  author: String,
  post: String,
  creator: String,
  public: Boolean,
  selectedFile: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostModel = mongoose.model<IPost>("PostModel", postSchema);

export default PostModel;
