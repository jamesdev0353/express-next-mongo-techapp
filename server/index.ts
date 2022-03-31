import next from "next";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.f2hbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const PORT = process.env.PORT || 3000;
export const handle = nextApp.getRequestHandler(); //part of next config

import projectsRoutes from "./routes/projectsRoutes";
import userRoutes from "./routes/userRoutes";
import blockchainRoutes from "./routes/blockchainRoutes";

nextApp.prepare().then(() => {
  const app = express();
  // express code here
  app.use(bodyParser.json({ limit: "30mb" }));
  app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());
  //projects routes
  app.use("/projects", projectsRoutes);
  app.use("/user", userRoutes);
  //blockcain routes
  app.use("/blog", blockchainRoutes);
  app.get("/about", async (req: Request, res: Response) => {
    const actualPage = "/about";

    try {
      nextApp.render(req, res, actualPage);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  });

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

