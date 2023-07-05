import { Bootstrap } from "./base.bootstrap";
import { Application } from "express";
import * as http from "http";
import ServerConfig from "./configs/server.config";

export class ServerBootstrap extends Bootstrap {
  constructor(private readonly _app: Application) {
    super();
  }

  init() {
    return new Promise<string | Error>((_resolve, reject) => {
      const server = http.createServer(this._app);

      server
        .listen(`${ServerConfig.SERVER_PORT}`)
        .on("listening", () => {
          console.log(`Server listening on port: ${ServerConfig.SERVER_PORT}`);
        })
        .on("error", (error) => {
          reject(error);
          console.log(`Server error on port: ${ServerConfig.SERVER_PORT}`);
        });
    });
  }
}
