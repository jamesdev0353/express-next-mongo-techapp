import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import axios from "axios";
import { LocalStorage } from "node-localstorage";
// import posts from './routes/posts.js'
import next from "next";

const CONNECTION_URL =
  "mongodb+srv://mern_stack:mernstack123@cluster0.omcc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
export const handle = nextApp.getRequestHandler(); //part of next config

import {
  createProject,
  updateProject,
  getProject,
  deleteProject,
  likeProject,
} from "./controllers/projects.js";

import {
  signUpUser,
  logInUser,
  findUser,
  setUser,
} from "./controllers/user.js";

// import url from "./routes/blockchainR.js";
import ProjectModel from "./models/projectModel.js";
import User from "./models/userModel.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import blockchainRoutes from "./routes/blockchainRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import auth from "./middleware/auth.js";
import { IPost } from "./models/interface.js";
import { RequestHandler } from "express-serve-static-core";
nextApp.prepare().then(() => {
  const app = express();
  // express code here
  const extended: boolean = true;
  app.use(express.urlencoded({ extended: true }) as RequestHandler);
  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended }));
  app.use(cors());

  //express routes here
  //projects rutes
  app.use("/projects/api", projectsRoutes);
  app.use("/projects/api/likeProject/:id", projectsRoutes);
  app.patch("/projects/api/:id", auth, updateProject);
  app.patch("/projects/api/likeProject/:id", auth, likeProject);
  app.get("/projects", async (req, res) => {
    const actualPage = "/projects";
    // const number:number = 2;
    try {
      const projectModels = await ProjectModel.find();
      const queryParams: any = projectModels;

      nextApp.render(req, res, actualPage, queryParams); //,number
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  });
  app.delete("/projects/api/:id", auth, deleteProject);
  app.get("/about", async (req, res) => {
    const actualPage = "/about";

    try {
      nextApp.render(req, res, actualPage);
    } catch (err: any) {
      res.status(401).json({ message: err.message });
    }
  });

  app.post("/projects", createProject);
  //blockcain routes
  app.use("/blog/blockchain/api", blockchainRoutes);
  // user routes

  app.post("/user/signup", signUpUser);
  app.post("/user/login", logInUser);

  app.get("/user", async (req, res) => {
    const actualPage = "/user";

    try {
      nextApp.render(req, res, actualPage);
    } catch (err: any) {
      res.status(401).json({ message: err.message });
    }
  });

  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });

  mongoose
    .connect(CONNECTION_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() =>
      app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));
  // const app = express();
});
// mongoose.set("useFindAndModify", false);
