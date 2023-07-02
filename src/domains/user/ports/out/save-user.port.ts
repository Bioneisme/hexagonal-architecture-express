import { CreateUserCommand } from "../in/create-user.command";
import { UserEntity } from "../../entities/user.entity";

export interface SaveUserPort {
  save(user: CreateUserCommand): Promise<UserEntity>;
}
