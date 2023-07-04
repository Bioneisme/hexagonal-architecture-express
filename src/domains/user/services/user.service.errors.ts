import { IError } from "../../../helpers/interfaces/error.interface";

export class UserAlreadyExistsError extends Error implements IError {
  code: number = 409;
  constructor(message: string = "User already exists") {
    super(message);
    this.name = "UserAlreadyExistsError";
  }
}
