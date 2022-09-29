import { Model, DataTypes } from "deno_db";

export class User extends Model {
  // Table Name
  static table = "users";

  static timestamps = true;

  static fields = {
    UserGuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      // autoIncrement: true,
      // unique: true,
    },
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
  };
}
