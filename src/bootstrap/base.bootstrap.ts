import { DataSource } from "typeorm";

export abstract class Bootstrap {
  abstract init(): Promise<string | Error | DataSource>;
}
