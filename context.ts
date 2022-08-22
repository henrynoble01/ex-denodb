import { debug } from "https://deno.land/std@0.104.0/log/mod.ts";
import { Database, SQLite3Connector } from "./deps.ts";
import { User } from "./src/models/user.ts";

const connector = new SQLite3Connector({
  filepath: "./db/database.sqlite",
});

// export const db = new Database({ connector, debug: true  });
export const db = new Database(connector);

db.link([User]);
// await db.sync();
