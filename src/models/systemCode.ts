import { DataTypes, Model } from "../../deps.ts";

export class SystemCode extends Model {
  static table = "systemCodes";
  static timestamps = true;

  static fields = {
    Oid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Description: DataTypes.STRING,
    Value: DataTypes.STRING,
    Group: DataTypes.STRING,
  };
}
