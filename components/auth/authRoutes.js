import express from "express";
import { create, info } from "./authController.js";

const AuthRouter = express.Router();

AuthRouter.get("/api-info", info);

AuthRouter.get("/user-sign-up", create);

export { AuthRouter };
