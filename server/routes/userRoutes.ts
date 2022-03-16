import express from "express";

import { findUser, logInUser, signUpUser } from "../controllers/user";

const router = express.Router();
router.get("/", findUser);
router.post("/signup", signUpUser);
router.post("/login", logInUser);
// router.post("/user/login", logInUser);

export default router;
