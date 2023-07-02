import { Bootstrap } from "./base.bootstrap";
import { Application } from "express";
import * as http from "http";
import { AppService } from "./services/app.service";

export default class extends Bootstrap {
  constructor(private readonly _app: Application) {
    super();
  }

  init() {
    return new Promise<string | Error>((_resolve, reject) => {
      const server = http.createServer(this._app);

      server
        .listen(`${AppService.SERVER.PORT}`)
        .on("listening", () => {
          console.log(`Server listening on port: ${AppService.SERVER.PORT}`);
        })
        .on("error", (error) => {
          reject(error);
          console.log(`Server error on port: ${AppService.SERVER.PORT}`);
        });
    });
  }
}
