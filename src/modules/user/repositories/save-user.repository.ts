import { Service } from "typedi";
import { SaveUserPort } from "../../../domains/user/ports/out/save-user.port";
import { UserModel } from "../models/user.model";
import { UserMapper } from "../mappers/user.mapper";
import { CreateUserCommand } from "../../../domains/user/ports/in/create-user.command";
import { DatabaseBootstrap } from "../../../bootstrap/database.bootstrap";

@Service()
export class SaveUser implements SaveUserPort {
  async save(user: CreateUserCommand) {
    const _repository = DatabaseBootstrap.db.getRepository(UserModel);
    const result = await _repository.save(user);
    return UserMapper.mapToDomain(result);
  }
}
