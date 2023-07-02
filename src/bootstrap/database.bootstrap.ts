import { Bootstrap } from "./base.bootstrap";
import { DataSource } from "typeorm";
import { DatabaseConfig } from "./configs/database.config";
import { AppService } from "./services/app.service";

let dataSource: DataSource;
export default class extends Bootstrap {
  init(): Promise<DataSource> {
    const config = AppService.DATABASE;

    const appDataSource = new DataSource({
      type: "postgres",
      ...config,
    });

    dataSource = appDataSource;

    return appDataSource.initialize();
  }

  static get dataSource(): DataSource {
    return dataSource;
  }
}
