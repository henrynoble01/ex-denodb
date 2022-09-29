// import { db } from "./context.ts";
import { logger } from "./src/services/logger.ts";

import { Application } from "oak";
import { router } from "./src/routes/main.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

// db.sync();
// db.sync({ drop: true });

app.addEventListener("listen", ({ hostname, port, secure }) => {
  logger.info(
    `Listening on ${secure ? "https://" : "http://"}${
      hostname || "localhost"
    }:${port}`
  );
  logger.info("The app is running");
});

await app.listen({ port: 5001 });
