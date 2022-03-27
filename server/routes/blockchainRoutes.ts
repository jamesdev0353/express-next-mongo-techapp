import express from "express";

import { getBlocks } from "../controllers/blockchain";

const router = express.Router();

router.get("/blockchain/api", getBlocks);

// router.patch("/:id", updateProject);

export default router;
