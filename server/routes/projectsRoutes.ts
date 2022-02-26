import express from "express";
import { Request, Response } from "express";

import {
  getProjects,
  getProject,
  deleteProject,
  createProject,
} from "../controllers/projects";

interface IRoutes {
  createProject: () => void;
}
import ProjectModel from "../models/projectModel";

const   router = express.Router();

router.get("/projects/api", getProjects);
router.post("/projects/api", createProject);
router.get("/projects/api/likeProject/:id", getProject);
router.delete("/projects/api/:id", deleteProject);

export default router;
