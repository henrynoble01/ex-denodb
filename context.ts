import { Database, SQLite3Connector } from "deno_db";
import { User } from "./src/models/user.ts";

const connector = new SQLite3Connector({
  filepath: "./db/database.sqlite",
});

// const connector = new PostgresConnector({
//   database: "deno_db",
//   host: "localhost",
//   username: "postgres",
//   password: "Admin@123",
//   port: 5432,
//   // uri:""
// });

// export const db = new Database({ connector, debug: true  });
export const db = new Database(connector);

// Many to many relationships
// const BusinessOwner = Relationship.manyToMany(Business, Owner)

db.link([User]);
// await db.sync();
