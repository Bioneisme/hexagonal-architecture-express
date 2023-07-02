import { Request, Response } from "express";
import { CreateUserCommand } from "../../../../domains/user/ports/in/create-user.command";
import { CreateUserService } from "../../../../domains/user/services/create-user.service";
import { Container, Service } from "typedi";
import { LoadUser } from "../../ports/user.load.port";
import { SaveUser } from "../../ports/user.save.port";
import { UserMapper } from "../../user.mapper";

@Service()
export class CreateUserController {
  async createUser(request: Request, response: Response) {
    try {
      const { email, phone, password, name } = request.body;
      const command = new CreateUserCommand(name, email, phone, password);
      const createUserService = new CreateUserService(
        Container.get(LoadUser),
        Container.get(SaveUser)
      );

      const userCreated = await createUserService.createUser(command);
      if (!userCreated) {
        return response.status(400).json({ message: "User already exists" });
      }

      return response.status(201).json(UserMapper.mapToOrmEntity(userCreated));
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
