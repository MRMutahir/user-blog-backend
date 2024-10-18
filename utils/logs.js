import log4js from "log4js";

log4js.configure({
  appenders: {
    console: { type: "console" },
    file: { type: "file", filename: "Logs/info.log" },
    info: { type: "file", filename: "Logs/info.log" },
    error: { type: "file", filename: "Logs/error.log" },
  },
  categories: {
    default: { appenders: ["console", "file"], level: "info" },
    info: { appenders: ["info"], level: "info" },
    error: { appenders: ["error"], level: "error" },
  },
});

const logger = log4js.getLogger();

export { logger };
