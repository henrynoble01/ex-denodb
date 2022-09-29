import { Router, Context } from "oak";
import { authRouter } from "./auth.ts";

export const router = new Router();

router
  .get("/", (ctx: Context) => {
    ctx.response.body = {
      message: "Hello World",
    };
  })
  .use("/auth", authRouter.routes());
