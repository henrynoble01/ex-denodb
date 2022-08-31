import { DataTypes, Model } from "../../deps.ts";

export class Book extends Model {
  static table = "books";
  static timestamps = true;

  static fields = {
    Oid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING,
    Description: DataTypes.string(2000),
    Rating: DataTypes.INTEGER,
  };
}
