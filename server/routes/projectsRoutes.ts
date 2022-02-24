import express from "express";
import { Request, Response } from "express";

import {
  getProjects,
  createProject,
  getProject,
} from "../controllers/projects";


import ProjectModel from "../models/projectModel";

const router = express.Router();

// router.route()
router.get("/projects/api", getProjects);
router.get("/api/likeProject/:id", getProject);

// router.post("/", createProject);
// router.patch("/:id", updateProject);

export default router;
