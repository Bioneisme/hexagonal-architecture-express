import { UserModel } from "../models/user.model";
import { UserEntity } from "../../../domains/user/entities/user.entity";

export class UserMapper {
  static mapToDomain(user: UserModel): UserEntity {
    return new UserEntity(
      user.id,
      user.name,
      user.email,
      user.phone,
      user.password
    );
  }

  static mapToOrmEntity(user: UserEntity): UserModel {
    const userOrmEntity = new UserModel();
    userOrmEntity.id = user.id;
    userOrmEntity.name = user.name;
    userOrmEntity.email = user.email;
    userOrmEntity.phone = user.phone;
    userOrmEntity.password = user.password;
    return userOrmEntity;
  }
}
