import { UserEntity } from "../../entities/user.entity";

export interface LoadUserPort {
  loadUserById(id: string): Promise<UserEntity>;

  loadUserByEmail(email: string): Promise<UserEntity>;

  loadUserByPhone(phone: string): Promise<UserEntity>;
}
