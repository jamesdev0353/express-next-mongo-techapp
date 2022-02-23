import express from "express";
import { Request, Response } from "express";

import {
  getProjects,
  createProject,
  getProject,
} from "../controllers/projects";

import auth from "../middleware/auth";
import ProjectModel from "../models/projectModel";

const router = express.Router();

// router.route()
router.get("/projects/api", getProjects);
router.get("/api/likeProject/:id", getProject);
router.get("/projects", async (req: Request, res: Response) => {
  const actualPage = "/projects";
  try {
    const projectModels = await ProjectModel.find();
    const queryParams: any = projectModels;

    res.render(actualPage, queryParams);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});
// router.post("/", createProject);
// router.patch("/:id", updateProject);

export default router;
