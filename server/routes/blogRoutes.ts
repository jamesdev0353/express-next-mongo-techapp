import express from "express";

import { getBlocks } from "../controllers/blockchain";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
  createComment,
  deleteComment,
} from "../controllers/posts";

const router = express.Router();

router.get("/blockchain/api", getBlocks);
router.get("/api", getPosts);
router.get("/api/:id", getPost);
router.post("/api", createPost);
// router.get("/api/:id", getBlocks);
router.delete("/api/:id", deletePost);
router.patch("/api/:id", updatePost);
router.post("/api/:id/comments", createComment);
router.delete("/comments/:id", deleteComment);


export default router;
