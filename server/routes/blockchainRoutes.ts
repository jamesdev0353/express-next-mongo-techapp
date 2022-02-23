import express from "express";

import { getBlocks } from "../controllers/blockchain";

const router = express.Router();

router.get("/", getBlocks);
// router.get("/", getBlocksDescr(coin));

// router.patch("/:id", updateProject);

export default router;
