import { UserEntity } from "../../entities/user.entity";

export interface SaveUserPort {
  saveUser(user: UserEntity): Promise<boolean>;
}
