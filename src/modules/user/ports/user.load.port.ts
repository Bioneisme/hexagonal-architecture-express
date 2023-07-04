import { LoadUserPort } from "../../../domains/user/ports/out/load-user.port";
import { UserEntity } from "../../../domains/user/entities/user.entity";
import { UserOrmEntity } from "../user.orm-entity";
import { UserMapper } from "../user.mapper";
import { Service } from "typedi";
import DatabaseBootstrap from "../../../bootstrap/database.bootstrap";
import { UserNotFoundError } from "../../../domains/user/entities/user.errors";

@Service()
export class LoadUser implements LoadUserPort {
  async loadByEmail(email: string): Promise<UserEntity> {
    const _repository = DatabaseBootstrap.db.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { email: email } });

    if (!result) {
      throw new UserNotFoundError();
    }
    return UserMapper.mapToDomain(result);
  }

  async loadById(id: string): Promise<UserEntity> {
    const _repository = DatabaseBootstrap.db.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { id: id } });

    if (!result) {
      throw new UserNotFoundError();
    }
    return UserMapper.mapToDomain(result);
  }

  async loadByPhone(phone: string): Promise<UserEntity> {
    const _repository = DatabaseBootstrap.db.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { phone: phone } });

    if (!result) {
      throw new UserNotFoundError();
    }
    return UserMapper.mapToDomain(result);
  }

  async checkUserExists(email: string, phone: string): Promise<boolean> {
    const _repository = DatabaseBootstrap.db.getRepository(UserOrmEntity);
    const result = await _repository.findOne({
      where: [{ email: email }, { phone: phone }],
    });

    return result !== null;
  }
}
