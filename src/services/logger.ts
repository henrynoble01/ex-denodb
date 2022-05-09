import { log } from "../../deps.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
    file: new log.handlers.FileHandler("WARNING", {
      filename: "../../app.log",
      //   you can change format of output message using keys in `LogRecord`
      formatter: "{levelName} {msg}",
    }),
  },

  loggers: {
    //   Configure Default logger available via short-hand methods above.
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },

    tasks: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

let logger;

// get the default logger
logger = log.getLogger();

logger.error("This is a error");
