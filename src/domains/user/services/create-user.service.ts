import { CreateUserUseCase } from "../ports/in/create-user.use-case";
import { CreateUserCommand } from "../ports/in/create-user.command";
import { LoadUserPort } from "../ports/out/load-user.port";
import { SaveUserPort } from "../ports/out/save-user.port";
import { UserEntity } from "../entities/user.entity";
import { UserAlreadyExistsError } from "./user.service.errors";

export class CreateUserService implements CreateUserUseCase {
  constructor(
    private readonly _loadUserPort: LoadUserPort,
    private readonly _saveUserPort: SaveUserPort
  ) {}

  async createUser(command: CreateUserCommand): Promise<UserEntity> {
    const userExists = await this._loadUserPort.checkUserExists(
      command.email,
      command.phone
    );

    if (userExists) {
      throw new UserAlreadyExistsError();
    }

    return await this._saveUserPort.save(command);
  }
}
