import { log } from "../../deps.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
    file: new log.handlers.FileHandler("WARNING", {
      filename: "./app.log",
      //   you can change format of output message using keys in `LogRecord`
      formatter: "[{loggerName} - {datetime} ]  {levelName} {msg}",
      // formatter: (logRecord) => {
      //   let msg = `${logRecord.loggerName}:${logRecord.msg}`;
      //   return msg;
      // },
      mode: "a",
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

export const logger = log.getLogger();

// get the default logger
// logger = log.getLogger();

logger.warning("This is a error");
logger.error("This is a error");
logger.critical("This is a error");
