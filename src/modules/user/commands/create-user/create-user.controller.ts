import { Request, Response } from "express";
import { CreateUserCommand } from "../../../../domains/ports/in/create-user.command";
import { CreateUserService } from "../../../../domains/services/create-user.service";
import { Container, Service } from "typedi";
import { LoadUser } from "../../loadUser";

@Service()
export class CreateUserController {
  async createUser(request: Request, response: Response) {
    const { email, phone, password, name } = request.body;
    const command = new CreateUserCommand(name, email, phone, password);
    const createUserService = new CreateUserService(Container.get(LoadUser));

    const userCreated = await createUserService.createUser(command);
    if (!userCreated)
      return response.status(400).json({ message: "User already exists" });
    return response.status(201).json(userCreated);
  }
}
