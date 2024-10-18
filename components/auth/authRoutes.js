import express from "express";
import { create, info } from "./authController.js";
import { validateUser } from "../../middlewares/joiMiddlewares.js";

const AuthRouter = express.Router();

AuthRouter.get("/api-info", info);

AuthRouter.post("/user-sign-up", validateUser, create);

export { AuthRouter };
