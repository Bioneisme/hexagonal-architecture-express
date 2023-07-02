import { UserEntity } from "../../entities/user.entity";

export interface LoadUserPort {
  loadById(id: string): Promise<UserEntity>;

  loadByEmail(email: string): Promise<UserEntity>;

  loadByPhone(phone: string): Promise<UserEntity>;
}
