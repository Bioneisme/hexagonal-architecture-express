import { IUserPort } from "../../domains/ports/out/user.port";
import { UserEntity } from "../../domains/entities/user.entity";
import { UserOrmEntity } from "./user.orm-entity";
import { UserMapper } from "./user.mapper";
import { Service } from "typedi";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";

@Service()
export class LoadUser implements IUserPort {
  async loadUserByEmail(email: string): Promise<UserEntity> {
    const _repository =
      DatabaseBootstrap.dataSource.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { email: email } });

    if (!result) return null;
    return UserMapper.mapToDomain(result);
  }

  async loadUserById(id: string): Promise<UserEntity> {
    const _repository =
      DatabaseBootstrap.dataSource.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { id: id } });

    if (!result) return null;
    return UserMapper.mapToDomain(result);
  }

  async loadUserByPhone(phone: string): Promise<UserEntity> {
    const _repository =
      DatabaseBootstrap.dataSource.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { phone: phone } });

    if (!result) return null;
    return UserMapper.mapToDomain(result);
  }
}
