import { Request, Response } from "express";
import { IError } from "./interfaces/error.interface";

export default class {
  static routeNotFound(req: Request, res: Response) {
    return res.status(404).send("Route not found");
  }

  static genericError(error: IError, req: Request, res: Response) {
    return res.status(error.code || 500).json({
      message: error.message,
      stack: error.stack,
    });
  }
}
