import { db } from "./context.ts";
import { log } from "./deps.ts";

// db.sync();
db.sync({ drop: true });

// const
log.info("The app is running");
