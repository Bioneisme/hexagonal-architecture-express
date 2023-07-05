import express, { Application, Router } from "express";
import compression from "compression";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import { UserRoute } from "./modules/user/routes/user.route";
import { Container } from "typedi";
import { LoggingMiddleware } from "./shared/middlewares/logging.middleware";
import ErrorHandler from "./shared/errors/http.error";
import healthRoute from "./shared/routes/health.route";

class App {
  readonly app: Application;
  readonly userRoute: Router;
  readonly loggingMiddleware: any;

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
    this.app.use(LoggingMiddleware.log);
  }

  mountRoutes() {
    this.app.use("/users", this.userRoute);
  }

  mountErrors() {
    this.app.use(ErrorHandler.routeNotFound);
    this.app.use(ErrorHandler.genericError);
  }
}

export default new App().app;
