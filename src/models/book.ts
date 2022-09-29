import { DataTypes, Model } from "deno_db";

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
    Author: DataTypes.STRING,
  };
}
