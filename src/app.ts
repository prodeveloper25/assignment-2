import { cors } from "cors";
import express, { Application, Request, Response } from "express";
import { UserRoutes } from "./app/modules/user/user.route";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", UserRoutes);

const getAController = (req: Request, res: Response) => {
  res.send("Hallo World");
};

app.get("/", getAController);

export default app;
