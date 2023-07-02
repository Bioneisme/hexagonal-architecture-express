import { CreateUserCommand } from "./create-user.command";

export interface CreateUserUseCase {
  createUser(command: CreateUserCommand): Promise<boolean>;
}
