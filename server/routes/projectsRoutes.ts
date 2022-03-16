import express from "express";
import { Request, Response } from "express";

import {
  getProjects,
  getProject,
  deleteProject,
  createProject,
  updateProject,
} from "../controllers/projects";

interface IRoutes {
  createProject: () => void;
}
import ProjectModel from "../models/projectModel";

const router = express.Router();

router.get("/api", getProjects);
router.post("/api", createProject);
router.get("/api/likeProject/:id", getProject);
router.delete("/api/:id", deleteProject);
router.patch("/api/:id", updateProject);
export default router;
