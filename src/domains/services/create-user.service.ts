import { CreateUserUseCase } from "../ports/in/create-user.use-case";
import { CreateUserCommand } from "../ports/in/create-user.command";
import { LoadUserPort } from "../ports/out/load-user.port";

export class CreateUserService implements CreateUserUseCase {
  constructor(private readonly _loadUserPort: LoadUserPort) {}
  async createUser(command: CreateUserCommand) {
    const userByEmail = await this._loadUserPort.loadUserByEmail(command.email);
    const userByPhone = await this._loadUserPort.loadUserByPhone(command.phone);
    return !(userByEmail || userByPhone);
  }
}
