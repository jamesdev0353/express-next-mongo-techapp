import express from "express";

import { getBlocks } from "../controllers/blockchain";
import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} from "../controllers/posts";

const router = express.Router();

router.get("/blockchain/api", getBlocks);
router.get("/api", getPosts);
router.post("/api", createPost);
// router.get("/api/:id", getBlocks);
router.delete("/api/:id", deletePost);
router.patch("/api/:id", updatePost);


export default router;
