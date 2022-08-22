import { Model, DataTypes } from "../../deps.ts";

export class User extends Model {
  // Table Name
  static table = "users";

  static timestamps = true;

  static fields = {
    userGuid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  };
}
