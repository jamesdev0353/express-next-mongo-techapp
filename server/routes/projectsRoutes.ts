import express from "express";
import { Request, Response } from "express";

import {
  getProjects,
  getProject,
  deleteProject,
  createProject,
  updateProject,
} from "../controllers/projects";
import auth from "./../middleware/auth";

interface IRoutes {
  createProject: () => void;
}
import ProjectModel from "../models/projectModel";

const router = express.Router();

router.get("/api", getProjects);
router.post("/api", auth, createProject);
router.get("/api/likeProject/:id", getProject);
router.delete("/api/:id", auth, deleteProject);
router.patch("/api/:id", auth, updateProject);
export default router;
