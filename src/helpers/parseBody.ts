import { Context } from "oak";

export function parseRequestBody<T>(ctx: Context) {
  const { request } = ctx;
  // if (request.hasBody) {
  const value = request.body().value;

  // }
  return value;
}
