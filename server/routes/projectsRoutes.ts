import express from "express";
import { Request, Response } from "express";

import {
  getProjects,
  createProject,
  getProject,
  deleteProject,
} from "../controllers/projects";

interface IRoutes {
  createProject: () => void;
}
import ProjectModel from "../models/projectModel";

const router = express.Router();

// router.route()
router.get("/projects/api", getProjects);
router.get("/api/likeProject/:id", getProject);

router.delete("/projects/api/:id", deleteProject);
// router.post("/", createProject );
// router.patch("/:id", updateProject);

export default router;
