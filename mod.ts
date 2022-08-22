import { db } from "./context.ts";
import { log } from "./deps.ts";

db.sync();

// const
log.info("The app is running");
