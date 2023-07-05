import { NextFunction, Request, Response } from "express";
import logger from "../../bootstrap/configs/logger.config";

export class LoggingMiddleware {
  public static log(req: Request, res: Response, next: NextFunction) {
    const startTimer = Date.now();
    res.on("finish", () => {
      const ms = Date.now() - startTimer;
      logger.info(
        `(${
          req.headers["x-forwarded-for"] || req.socket.remoteAddress || null
        }) [${req.method}] ` +
          `${req.originalUrl}: ${res.statusCode} ${JSON.stringify(req.body)}` +
          ` - ${ms}ms`
      );
    });
    next();
  }
}
