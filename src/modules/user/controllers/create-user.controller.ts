import { NextFunction, Request, Response } from "express";
import { CreateUserCommand } from "../../../domains/user/ports/in/create-user.command";
import { CreateUserService } from "../../../domains/user/services/create-user.service";
import { Container, Service } from "typedi";
import { LoadUser } from "../repositories/load-user.repository";
import { SaveUser } from "../repositories/save-user.repository";
import { UserMapper } from "../mappers/user.mapper";

@Service()
export class CreateUserController {
  async createUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, phone, password, name } = request.body;
      const command = new CreateUserCommand(name, email, phone, password);
      const createUserService = new CreateUserService(
        Container.get(LoadUser),
        Container.get(SaveUser)
      );

      const userCreated = await createUserService.createUser(command);
      return response.status(201).json(UserMapper.mapToOrmEntity(userCreated));
    } catch (error: any) {
      next(error);
    }
  }
}
