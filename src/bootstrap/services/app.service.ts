import * as dotenv from "dotenv";
import { ServerConfig } from "../configs/server.config";
import { DatabaseConfig } from "../configs/database.config";

dotenv.config();

export class AppService {
  static get SERVER(): ServerConfig {
    return {
      PORT: process.env.SERVER_PORT || 3000,
      HOST: "localhost",
    };
  }

  static get DATABASE(): DatabaseConfig {
    return {
      host: process.env.DATABASE_HOST || "localhost",
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME || "postgres",
      password: process.env.DATABASE_PASSWORD || "postgres",
      database: process.env.DATABASE_NAME || "postgres",
      synchronize: process.env.DATABASE_SYNCHRONIZE === "true" || true,
      logging: process.env.DATABASE_LOGGING === "true" || true,
      entities: [
        process.env.DATABASE_ENTITIES ||
          "src/infrastructure/**/*.orm-entity.ts",
      ],
    };
  }
}
