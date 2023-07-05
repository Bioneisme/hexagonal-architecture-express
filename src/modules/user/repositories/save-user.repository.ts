import { Service } from "typedi";
import { SaveUserPort } from "../../../domains/user/ports/out/save-user.port";
import DatabaseBootstrap from "../../../bootstrap/database.bootstrap";
import { UserModels } from "../models/user.models";
import { UserMapper } from "../mappers/user.mapper";
import { CreateUserCommand } from "../../../domains/user/ports/in/create-user.command";

@Service()
export class SaveUser implements SaveUserPort {
  async save(user: CreateUserCommand) {
    const _repository = DatabaseBootstrap.db.getRepository(UserModels);
    const result = await _repository.save(user);
    return UserMapper.mapToDomain(result);
  }
}
