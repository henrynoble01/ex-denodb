import { Context } from "oak";
import { User } from "../models/user.ts";
import { UserLogin, UserLoginSchema } from "../schemas/user.ts";

class AuthController {
  async login(ctx: Context) {
    const { request, response } = ctx;

    const body = request.body();

    const value: UserLogin = await body.value;

    UserLoginSchema.parse(value);
  }

  async register(ctx: Context) {
    const { request } = ctx;
    const requestBody = request.body();
    const value: { username: string } = await requestBody.value;

    await User.create([
      {
        name: value.username,
      },
    ]);
  }
}

export const authController = new AuthController();
