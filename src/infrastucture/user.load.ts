import { LoadUserPort } from "../domains/ports/out/load-user.port";
import { UserEntity } from "../domains/entities/user.entity";
import { UserOrmEntity } from "./user.orm-entity";

export class UserLoad implements LoadUserPort {
  loadUserByEmail(email: string): Promise<UserEntity> {
    return Promise.resolve(undefined);
  }

  loadUserById(id: string): Promise<UserEntity> {
    return Promise.resolve(undefined);
  }

  loadUserByPhone(phone: string): Promise<UserEntity> {
    return Promise.resolve(undefined);
  }
}
