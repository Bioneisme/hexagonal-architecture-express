import { IsArray, IsString, validateSync } from "class-validator";
import { InitializeFromEnv, ToBoolean, ToInt } from "../../helpers/decorators";
import { ConfigurationError } from "./configuration.errors";

class DatabaseConfig {
  @IsString()
  @InitializeFromEnv()
  static DB_HOST: string;

  @ToInt()
  @InitializeFromEnv()
  static DB_PORT: number;

  @IsString()
  @InitializeFromEnv()
  static DB_USERNAME: string;

  @IsString()
  @InitializeFromEnv()
  static DB_PASSWORD: string;

  @IsString()
  @InitializeFromEnv()
  static DB_DATABASE: string;

  @ToBoolean()
  @InitializeFromEnv()
  static DB_SYNCHRONIZE: boolean;

  @ToBoolean()
  @InitializeFromEnv()
  static DB_LOGGING: boolean;

  @IsArray()
  @InitializeFromEnv()
  static DB_ENTITIES: string[];

  public static validate(): void {
    const errors = validateSync(this);

    if (errors.length > 0) {
      throw new ConfigurationError(errors);
    }
  }
}

DatabaseConfig.validate();
export default DatabaseConfig;
