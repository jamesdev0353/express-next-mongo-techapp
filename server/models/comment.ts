import mongoose from "mongoose";
import { IComment } from "./interface";

const commentSchema = new mongoose.Schema<IComment>({
  author: String,
  comment: String,
  name: String,
  post: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CommentModel = mongoose.model<IComment>("Comment", commentSchema);

export default CommentModel;
