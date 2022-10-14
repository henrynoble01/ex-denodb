import { logger } from "./src/services/logger.ts";

import { Application } from "oak";
import { router } from "./src/routes/main.ts";
import { errorController } from "./src/controllers/Error.ts";
import { db } from "./src/data/context.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => await errorController.error(ctx, next));

app.addEventListener("listen", ({ port, secure }) => {
  logger.info(
    `Listening on ${secure ? "https://" : "http://"}${
      // hostname ||
      "localhost"
    }:${port}`
  );
  logger.info("The app is running");
  // db.sync({ drop: true });
  db.sync();
});

await app.listen({ port: 5001 });
