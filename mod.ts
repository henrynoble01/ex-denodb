// import { db } from "./context.ts";
import { logger } from "./src/services/logger.ts";

import { Application } from "oak";
import { router } from "./src/routes/main.ts";
import { errorController } from "./src/controllers/Error.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => await errorController.error(ctx, next));

// db.sync();
// db.sync({ drop: true });

app.addEventListener("listen", ({ port, secure }) => {
  logger.info(
    `Listening on ${secure ? "https://" : "http://"}${
      // hostname ||
      "localhost"
    }:${port}`
  );
  logger.info("The app is running");
});

await app.listen({ port: 5001 });
