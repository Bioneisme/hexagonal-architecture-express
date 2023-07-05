import { IError } from "../../../shared/interfaces/error.interface";

export class UserNotFoundError extends Error implements IError {
  code = 404;
  constructor(message = "User not found") {
    super(message);
    this.name = "UserNotFoundError";
  }
}
