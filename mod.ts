import { Database, SQLite3Connector, Model, DataTypes, log } from "./deps.ts";

const connector = new SQLite3Connector({
  filepath: "./database.sqlite",
});

const db = new Database(connector);

class Business extends Model {
  // For the table name
  static table = "businesses";
  // For TIme_stamps
  static timestamps = true;
  // Defining Fields
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      length: 25,
    },
    // Using a Shortcut (check Field Descriptors s to learn more)
    // name:DataTypes.string(25),
  };
  // For Adding Default Values
  static defaults = {
    name: "Something about us",
  };
}

db.link([Business]);
db.sync();
log.info("The app is running");
