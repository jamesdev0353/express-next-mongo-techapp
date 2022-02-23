import express from "express";

import {
  getProjects,
  createProject,
  getProject,
} from "../controllers/projects.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", createProject);
// router.patch("/:id", updateProject);

export default router;
