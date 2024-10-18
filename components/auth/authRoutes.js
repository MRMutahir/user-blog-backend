import express from "express";
import { info } from "./authController.js";

const AuthRouter = express.Router();

AuthRouter.get("/api-info", info);

export { AuthRouter };
