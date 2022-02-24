import next from "next";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";

const CONNECTION_URL =
  "mongodb+srv://mern_stack:mernstack123@cluster0.omcc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const PORT = process.env.PORT || 3000;
export const handle = nextApp.getRequestHandler(); //part of next config

import {
  createProject,
  updateProject,
  deleteProject,
  likeProject,
} from "./controllers/projects";

import { signUpUser, logInUser } from "./controllers/user";

import ProjectModel from "./models/projectModel";
import projectsRoutes from "./routes/projectsRoutes";
import blockchainRoutes from "./routes/blockchainRoutes";
import auth from "./middleware/auth";

nextApp.prepare().then(() => {
  const app = express();
  // // express code here

  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());
  ////express routes here
  ////projects rutes
  app.use("/", projectsRoutes);
  // app.use("/projects/api/likeProject/:id", projectsRoutes);
  // app.patch("/projects/api/:id", auth, updateProject);
  // app.patch("/projects/api/likeProject/:id", auth, likeProject);

  app.post("/projects", createProject);
  // app.delete("/projects/api/:id", auth, deleteProject);
  app.get("/about", async (req: Request, res: Response) => {
    const actualPage = "/about";

    try {
      nextApp.render(req, res, actualPage);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  });
  ////blockcain routes
  app.use("/blog/blockchain/api", blockchainRoutes);

  ////blockcain routes
  // app.use("/blog/blockchain/api", blockchainRoutes);
  //// user routes

  // app.post("/user/signup", signUpUser);
  // app.post("/user/login", logInUser);

  // app.get("/user", async (req, res) => {
  //   const actualPage = "/user";

  //   try {
  //     nextApp.render(req, res, actualPage);
  //   } catch (err) {
  //     res.status(401).json({ message: err.message });
  //   }
  // });

  app.get("*", (req: Request, res: Response) => {
    return handle(req, res); // for all the react stuff
  });
  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    .then(() =>
      app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));
});

// nextApp.prepare().then(() => {
//   const app = express();
//   // express code here

//   app.use(bodyParser.json({ limit: "30mb" }));
//   app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//   app.use(cors());
//   app.all("*", (req: Request, res: Response) => {
//     return handle(req, res);
//   });
//   mongoose
//     .connect(CONNECTION_URL, {

//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     } as ConnectOptions)
//     .then(() =>
//       app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
//     )
//     .catch((error) => console.log(error.message));
// });
