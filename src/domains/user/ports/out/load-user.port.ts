import { UserEntity } from "../../entities/user.entity";

export interface LoadUserPort {
  loadById(id: string): Promise<UserEntity | null>;

  loadByEmail(email: string): Promise<UserEntity | null>;

  loadByPhone(phone: string): Promise<UserEntity | null>;
}
