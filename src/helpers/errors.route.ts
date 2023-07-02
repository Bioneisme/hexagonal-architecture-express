import { Request, Response } from "express";
import { IError } from "../modules/helpers/error.interface";

export default class {
  static notFound(req: Request, res: Response) {
    return res.status(404).send("Not Found");
  }

  static genericError(error: IError, req: Request, res: Response): void {
    res.status(error.status || 500).json({
      message: error.message,
      stack: error.stack,
    });
  }
}
