import { Router } from "oak";
import { authController } from "../controllers/auth.ts";

export const authRouter = new Router();

authRouter.post("/", authController.login);
// .post('/')
