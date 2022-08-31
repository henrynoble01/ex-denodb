import { Model, DataTypes } from "../../deps.ts";

export class Role extends Model {
  static table = "roles";
  static timestamps = true;

  static fields = {
    RoleGuid: DataTypes.UUID,
    RoleName: DataTypes.STRING,
    RoleOrder: DataTypes.INTEGER,
  };
}
