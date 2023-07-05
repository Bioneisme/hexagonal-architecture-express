import { validateSync } from "class-validator";
import { InitializeFromEnv } from "../../shared/decorators/env.decorator";
import { ConfigurationError } from "./configuration.errors";
import { ToInt } from "../../shared/decorators/primitive.decorator";

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
