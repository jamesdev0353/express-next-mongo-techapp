import express from "express";

import { findUser } from "../controllers/user.js";

const router = express.Router();

router.post("/finduser", findUser);
// router.post("/user/login", logInUser);

export default router;
