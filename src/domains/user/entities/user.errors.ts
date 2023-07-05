import { IError } from "../../../shared/interfaces/error.interface";

export class UserNotFoundError extends Error implements IError {
  code: number = 404;
  constructor(message: string = "User not found") {
    super(message);
    this.name = "UserNotFoundError";
  }
}
