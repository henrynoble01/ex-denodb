import { z } from "zod";

export const UserLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type UserLogin = z.infer<typeof UserLoginSchema>;
