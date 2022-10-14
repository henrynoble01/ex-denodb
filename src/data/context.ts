import { Database, Relationships, SQLite3Connector } from "deno_db";
import { Role } from "../models/roles.ts";
import { User } from "../models/user.ts";

const connector = new SQLite3Connector({
  filepath: "./db/databaseV2.sqlite",
});

// const connector = new PostgresConnector({
//   database: "deno_db",
//   host: "localhost",
//   username: "postgres",
//   password: "Admin@123",
//   port: 5432,
//   // uri:""
// });

export const db = new Database(connector);

// Many to many relationships
// const BusinessOwner = Relationship.manyToMany(Business, Owner)

const UserRoles = Relationships.manyToMany(User, Role);

db.link([UserRoles, Role, User]);
// await db.sync();
