// import * as dotenv from "dotenv";
// import { ServerConfig } from "../configs/server.config";
// import { DatabaseConfig } from "../configs/database.config";
// import { validate } from "class-validator";
//
// dotenv.config();
//
// export class AppService {
//   static get SERVER(): ServerConfig {
//     const config = new ServerConfig();
//     config.port = parseInt(process.env.SERVER_PORT) || constants.SERVER_PORT;
//
//     validate(config).then((errors) => {
//       if (errors.length > 0) {
//         throw new Error(errors.toString());
//       }
//     });
//
//     return config;
//   }
//
//   static get DATABASE(): DatabaseConfig {
//     const config = new DatabaseConfig();
//     config.DB_HOST = process.env.DATABASE_HOST || constants.DEFAULT_DB_HOST;
//     config.port =
//       parseInt(process.env.DATABASE_PORT) || constants.DEFAULT_DB_PORT;
//     config.username =
//       process.env.DATABASE_USERNAME || constants.DEFAULT_DB_USERNAME;
//     config.password =
//       process.env.DATABASE_PASSWORD || constants.DEFAULT_DB_PASSWORD;
//     config.database =
//       process.env.DATABASE_NAME || constants.DEFAULT_DB_DATABASE;
//     config.synchronize =
//       process.env.DATABASE_SYNCHRONIZE === "true" ||
//       constants.DEFAULT_DB_SYNCHRONIZE;
//     config.logging =
//       process.env.DATABASE_LOGGING === "true" || constants.DEFAULT_DB_LOGGING;
//     config.entities = [
//       process.env.DATABASE_ENTITIES || constants.DEFAULT_DB_ENTITIES,
//     ];
//
//     validate(config).then((errors) => {
//       if (errors.length > 0) {
//         throw new Error(errors.toString());
//       }
//     });
//
//     return config;
//   }
// }
