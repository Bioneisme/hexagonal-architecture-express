import { Service } from "typedi";
import { SaveUserPort } from "../../../domains/user/ports/out/save-user.port";
import DatabaseBootstrap from "../../../bootstrap/database.bootstrap";
import { UserOrmEntity } from "../user.orm-entity";
import { UserMapper } from "../user.mapper";
import { CreateUserCommand } from "../../../domains/user/ports/in/create-user.command";

@Service()
export class SaveUser implements SaveUserPort {
  async save(user: CreateUserCommand) {
    const _repository = DatabaseBootstrap.db.getRepository(UserOrmEntity);
    const result = await _repository.save(user);
    return UserMapper.mapToDomain(result);
  }
}
