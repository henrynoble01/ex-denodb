import { DataTypes, Model } from "deno_db";

export class Rating extends Model {
  static table = "ratings";
  static timestamps = true;

  static fields = {
    Oid: DataTypes.INTEGER,
    Rating: DataTypes.INTEGER,
    RatingDate: DataTypes.DATETIME,
  };
}
