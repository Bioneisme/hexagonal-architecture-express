import express, { Application, Router } from "express";
import compression from "compression";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import { UserRoute } from "./modules/user/user.route";
import { Container } from "typedi";
import ErrorHandler from "./helpers/errors.route";
import healthRoute from "./helpers/health.route";

class App {
  readonly app: Application;
  readonly userRoute: Router;
  constructor() {
    this.app = express();
    this.userRoute = Container.get(UserRoute).router;

    this.owaspSecurityMiddlewares();
    this.mountHealthCheck();
    this.mountMiddlewares();
    this.mountRoutes();
    this.mountErrors();
  }

  owaspSecurityMiddlewares() {
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(
      cors({
        origin: "*",
        optionsSuccessStatus: 200,
        methods: ["GET", "POST", "PUT", "DELETE"],
      })
    );
  }

  mountHealthCheck() {
    this.app.use("/", healthRoute);
  }

  mountMiddlewares() {
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  mountRoutes(): void {
    this.app.use("/users", this.userRoute);
  }

  mountErrors(): void {
    this.app.use(ErrorHandler.notFound);
    this.app.use(ErrorHandler.genericError);
  }
}

export default new App().app;
