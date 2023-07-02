import { CreateUserCommand } from "./create-user.command";
import { UserEntity } from "../../entities/user.entity";

export interface CreateUserUseCase {
  createUser(command: CreateUserCommand): Promise<UserEntity | Error>;
}
