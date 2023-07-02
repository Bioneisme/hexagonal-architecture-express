import { IsArray, IsBoolean, IsInt, IsString, Max, Min } from "class-validator";

export class DatabaseConfig {
  @IsString()
  host: string;

  @IsInt()
  @Min(1)
  @Max(65535)
  port: number;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  database: string;

  @IsBoolean()
  synchronize: boolean;

  @IsBoolean()
  logging: boolean;

  @IsArray()
  entities: string[];
}
