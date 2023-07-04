import { validateSync } from "class-validator";
import { InitializeFromEnv, ToInt } from "../../helpers/decorators";
import { ConfigurationError } from "./configuration.errors";

class ServerConfig {
  @ToInt()
  @InitializeFromEnv()
  static SERVER_PORT: number;

  public static validate(): void {
    const errors = validateSync(this);

    if (errors.length > 0) {
      throw new ConfigurationError(errors);
    }
  }
}

ServerConfig.validate();
export default ServerConfig;
