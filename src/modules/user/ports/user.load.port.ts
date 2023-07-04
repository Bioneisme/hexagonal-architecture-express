import { LoadUserPort } from "../../../domains/user/ports/out/load-user.port";
import { UserEntity } from "../../../domains/user/entities/user.entity";
import { UserOrmEntity } from "../user.orm-entity";
import { UserMapper } from "../user.mapper";
import { Service } from "typedi";
import DatabaseBootstrap from "../../../bootstrap/database.bootstrap";

// TODO: Error handling without null
@Service()
export class LoadUser implements LoadUserPort {
  async loadByEmail(email: string): Promise<UserEntity | null> {
    const _repository = DatabaseBootstrap.db.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { email: email } });

    if (!result) return null;
    return UserMapper.mapToDomain(result);
  }

  async loadById(id: string): Promise<UserEntity | null> {
    const _repository = DatabaseBootstrap.db.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { id: id } });

    if (!result) return null;
    return UserMapper.mapToDomain(result);
  }

  async loadByPhone(phone: string): Promise<UserEntity | null> {
    const _repository = DatabaseBootstrap.db.getRepository(UserOrmEntity);
    const result = await _repository.findOne({ where: { phone: phone } });

    if (!result) return null;
    return UserMapper.mapToDomain(result);
  }
}
