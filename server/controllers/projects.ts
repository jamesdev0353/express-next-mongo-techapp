import mongoose from "mongoose";
import { IPost } from "../models/interface";
import ProjectModel from "../models/projectModel";
import { Request, Response } from "express";
export const getProjects = async (req: any, res: any) => {
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

export const getProject = async (req: any, res: any) => {
  const { id } = req.params;

  try {
    const project = await ProjectModel.findById(id);
    // console.log(project, "project");
    res.status(200).json(project);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req: any, res: any) => {
  // res.send("Project Creation");
  const project = req.body;
  console.log(req.userId);
  const newProject = new ProjectModel({
    ...project,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newProject.save();

    // res.status(201).json(newProject);
  } catch {
    // res.status(409).json({ message: err.message });
  }
};

export const updateProject = async (req: any, res: any) => {
  const { id: _id } = req.params;
  const project = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("no post with this id");

  const updateProject = await ProjectModel.findByIdAndUpdate(
    _id,
    { ...project, _id },
    {
      new: true,
    }
  );

  res.json(updateProject);
};

export const deleteProject = async (req: any, res: any) => {
  const { id } = req.params;
  // console.log(req.paramms)
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with this id");

  await ProjectModel.findByIdAndRemove(id);
  console.log("delete");
  res.json({ message: "Project Deleted" });
};

export const likeProject = async (req: any, res: any) => {
  const { id } = req.params;
  // console.log(res, "req.body");
  // console.log(req.id.body);

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with this id");
  const project: any = await ProjectModel.findById(id);

  const index = project.likes.findIndex((id: any) => id === String(req.userId));

  if (index === -1) {
    project.likes.push(req.userId);
  } else {
    project.likes = project.likes.filter(
      (id: any) => id !== String(req.userId)
    );
  }

  const updatedProject = await ProjectModel.findByIdAndUpdate(
    id,
    project,
    // { likeCount: project.likeCount + 1 },
    { new: true }
  );

  res.json(updatedProject);
};
