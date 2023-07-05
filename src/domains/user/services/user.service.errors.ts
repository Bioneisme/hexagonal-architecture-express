import { IError } from "../../../shared/interfaces/error.interface";

export class UserAlreadyExistsError extends Error implements IError {
  code = 409;
  constructor(message = "User already exists") {
    super(message);
    this.name = "UserAlreadyExistsError";
  }
}
