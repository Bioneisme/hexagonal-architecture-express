import { UserOrmEntity } from "../../infrastucture/user.orm-entity";
import { UserEntity } from "../../domains/entities/user.entity";

export class UserMapper {
  static mapToDomain(user: UserOrmEntity): UserEntity {
    return new UserEntity(
      user.id,
      user.name,
      user.email,
      user.phone,
      user.password
    );
  }

  static mapToOrmEntity(user: UserEntity): UserOrmEntity {
    const userOrmEntity = new UserOrmEntity();
    userOrmEntity.id = user.id;
    userOrmEntity.name = user.name;
    userOrmEntity.email = user.email;
    userOrmEntity.phone = user.phone;
    userOrmEntity.password = user.password;
    return userOrmEntity;
  }
}
