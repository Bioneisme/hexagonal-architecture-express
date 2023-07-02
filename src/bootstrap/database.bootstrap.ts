import { Bootstrap } from "./base.bootstrap";
import { DataSource } from "typeorm";
import { AppService } from "./services/app.service";

let dataSource: DataSource;
export default class extends Bootstrap {
  init(): Promise<DataSource> {
    const config = AppService.DATABASE;
    console.log(config);

    const appDataSource = new DataSource({
      type: "postgres",
      ...config,
    });

    dataSource = appDataSource;

    return appDataSource.initialize();
  }

  static get db(): DataSource {
    return dataSource;
  }
}
