import { Router } from "express";
import { CreateUserController } from "../controllers/create-user.controller";
import { Inject, Service } from "typedi";

@Service()
export class UserRoute {
  private readonly _router: Router = Router();
  constructor(
    @Inject() private readonly _createUserController: CreateUserController
  ) {}

  get router(): Router {
    this._router.post("/", this._createUserController.createUser);
    return this._router;
  }
}
