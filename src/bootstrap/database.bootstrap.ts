import { Bootstrap } from "./base.bootstrap";
import { DataSource } from "typeorm";
import DatabaseConfig from "./configs/database.config";

let dataSource: DataSource;
export default class extends Bootstrap {
  init(): Promise<DataSource> {
    const config = DatabaseConfig;

    const appDataSource = new DataSource({
      type: "postgres",
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE,
      synchronize: config.DB_SYNCHRONIZE,
      logging: config.DB_LOGGING,
      entities: config.DB_ENTITIES,
    });

    dataSource = appDataSource;

    return appDataSource.initialize();
  }

  static get db(): DataSource {
    return dataSource;
  }
}
