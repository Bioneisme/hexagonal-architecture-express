import { IsInt, Max, Min } from "class-validator";

export class ServerConfig {
  @IsInt()
  @Min(1)
  @Max(65535)
  port: number;
}
