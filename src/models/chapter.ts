import { DataTypes, Model } from "deno_db";

export class Chapter extends Model {
  static table = "models";
  static timestamps = true;

  static fields = {
    Oid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Content: DataTypes.integer(100_000),
  };
}
