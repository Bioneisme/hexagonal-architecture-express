import { UserModels } from "../models/user.models";
import { UserEntity } from "../../../domains/user/entities/user.entity";

export class UserMapper {
  static mapToDomain(user: UserModels): UserEntity {
    return new UserEntity(
      user.id,
      user.name,
      user.email,
      user.phone,
      user.password
    );
  }

  static mapToOrmEntity(user: UserEntity): UserModels {
    const userOrmEntity = new UserModels();
    userOrmEntity.id = user.id;
    userOrmEntity.name = user.name;
    userOrmEntity.email = user.email;
    userOrmEntity.phone = user.phone;
    userOrmEntity.password = user.password;
    return userOrmEntity;
  }
}
