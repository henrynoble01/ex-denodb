import { DataTypes, Model } from "../../deps.ts";

export class Chapter extends Model {
  static table = "models";
  static timestamps = true;

  static fields = {
    Oid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Content: DataTypes.integer(100000),
  };
}
