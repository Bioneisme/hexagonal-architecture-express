import { Router } from "express";

class HealthRoute {
  constructor(private readonly _route = Router()) {}

  get router(): Router {
    return this._route.get("/", (_req, res) => res.send("OK"));
  }
}

export default new HealthRoute().router;
