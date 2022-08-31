import { DataTypes, Model } from "../../deps.ts";

export class Rating extends Model {
  static table = "ratings";
  static timestamps = true;

  static fields = {
    Oid: DataTypes.INTEGER,
    Rating: DataTypes.INTEGER,
    RatingDate: DataTypes.DATETIME,
  };
}
