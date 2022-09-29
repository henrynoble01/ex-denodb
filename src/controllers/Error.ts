import { Context, isHttpError } from "oak";

class ErrorController {
  async error(ctx: Context, next: () => Promise<unknown>) {
    try {
      await next();
    } catch (error) {
      if (isHttpError(error)) {
        ctx.response.status = error.status;
      } else {
        ctx.response.status = 500;
      }
      ctx.response.body = { error: error.message };
      ctx.response.type = "json";
    }
  }
}

export const errorController = new ErrorController();
