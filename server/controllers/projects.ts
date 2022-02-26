import mongoose from "mongoose";
import { IProject } from "../models/interface";
import ProjectModel from "../models/projectModel";
import { RequestHandler } from "express";
import { Request } from "express";

export interface IProjectInfoRequest extends Request {
  userId: string; // or any other type
  likes: Array<string>;
}

export const getProjects: RequestHandler = async (req, res) => {
  try {
    const projectModels = await ProjectModel.find();
    // res.send("This Works!");
    // console.log(ProjeModel);
    // console.log(projectModels);
    res.status(200).json(projectModels);
  } catch (err: any) {
    res.status(404).json({ message: err.message });
  }
};

export const getProject: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await ProjectModel.findById(id);
    // console.log(project, "project");
    res.status(200).json(project);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject: RequestHandler = async (
  req: IProjectInfoRequest,
  res
): Promise<void> => {
  const project: IProject = req.body;

  // console.log(req.userId);
  const newProject = new ProjectModel({
    ...project,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newProject.save();

    // res.status(201).json(newProject);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProject: RequestHandler = async (
  req: IProjectInfoRequest,
  res
) => {
  const { id: _id } = req.params;
  const project: IProject = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with this id");

  const updateProject: IProject = await ProjectModel.findByIdAndUpdate(
    _id,
    { ...project, _id },
    {
      new: true,
    }
  );
  res.json(updateProject);
};

export const deleteProject: RequestHandler = async (
  req: IProjectInfoRequest,
  res
) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with this id");

  await ProjectModel.findByIdAndRemove(id);
  console.log("delete");
  res.json({ message: "Project Deleted" });
};

export const likeProject: RequestHandler = async (
  req: IProjectInfoRequest,
  res
) => {
  const { id } = req.params;
  if (!req.userId) return res.json({ message: "Unauthenticated" });
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with this id");
  const project: IProjectInfoRequest = await ProjectModel.findById(id);
  const index = project.likes.findIndex(
    (id: string) => id === String(req.userId)
  );

  if (index === -1) {
    project.likes.push(req.userId);
  } else {
    project.likes = project.likes.filter(
      (id: string) => id !== String(req.userId)
    );
  }

  const updatedProject = await ProjectModel.findByIdAndUpdate(id, project, {
    new: true,
  });

  res.json(updatedProject);
};
