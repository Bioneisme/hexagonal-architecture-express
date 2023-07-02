import { Request, Response } from "express";
import { CreateUserCommand } from "../../../../domains/ports/in/create-user.command";
import { CreateUserService } from "../../../../domains/services/create-user.service";
import { Service } from "typedi";
import { LoadUserPort } from "../../../../domains/ports/out/load-user.port";

@Service()
export class CreateUserController {
  private readonly _createUserService = new CreateUserService(
    this._loadUserPort
  );

  constructor(private readonly _loadUserPort: LoadUserPort) {}

  async createUser(request: Request, response: Response) {
    const { email, phone, password, name } = request.body;
    const command = new CreateUserCommand(name, email, phone, password);
    const userCreated = await this._createUserService.createUser(command);
    if (!userCreated)
      return response.status(400).json({ message: "User already exists" });
    return response.status(201).json(userCreated);
  }
}
