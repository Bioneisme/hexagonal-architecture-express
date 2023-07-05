import { ValidationError } from "class-validator";

export class ConfigurationError extends Error {
  constructor(errors: ValidationError[], message = "Invalid configuration") {
    super(message);
    this.name = "ConfigurationError";
  }
}
