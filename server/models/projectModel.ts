import mongoose from "mongoose";
import { IPost } from "./interface";
const projectSchema = new mongoose.Schema<IPost>({
  title: String,
  description: String,
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  // likeCount: {
  //   type: Number,
  //   default: 0,
  // },
  likeList: [String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ProjectModel = mongoose.model<IPost>("ProjectModel", projectSchema);

export default ProjectModel;
