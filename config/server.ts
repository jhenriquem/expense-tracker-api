import express, { Application } from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import limiter from "../middlewares/rateLimit";
import usersRoute from "../routes/usersRoutes";
import ConnectionDB from "./database";

class Server {
  private port: string | number;
  private app: Application;
  private paths = {
    users: "/api/users",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.app.set("trust proxy", 3);

    this.middlewares();
    this.routes();
  }

  private routes() {
    this.app.use(this.paths.users, usersRoute);
  }
  private async DBconnection() {
    await ConnectionDB()
  }
  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(limiter);
  }

  online() {
    try {
      this.DBconnection()
      this.app.listen(this.port, () => {
        console.log(`Application running on port ${this.port}`);
      });
    } catch (err: any) {
      console.log(`Some error happened : ${err.message}`);
    }
  }
}

const app = new Server();

app.online();
