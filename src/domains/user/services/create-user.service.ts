import { CreateUserUseCase } from "../ports/in/create-user.use-case";
import { CreateUserCommand } from "../ports/in/create-user.command";
import { LoadUserPort } from "../ports/out/load-user.port";
import { SaveUserPort } from "../ports/out/save-user.port";
import { UserEntity } from "../entities/user.entity";

export class CreateUserService implements CreateUserUseCase {
  constructor(
    private readonly _loadUserPort: LoadUserPort,
    private readonly _saveUserPort: SaveUserPort
  ) {}

  async createUser(command: CreateUserCommand): Promise<UserEntity> {
    command.validate();

    const userByEmail = await this._loadUserPort.loadByEmail(command.email);
    const userByPhone = await this._loadUserPort.loadByPhone(command.phone);
    if (userByEmail || userByPhone) {
      throw new Error("User already exists");
    }

    return await this._saveUserPort.save(command);
  }
}
