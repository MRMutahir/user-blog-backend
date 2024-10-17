import mongoose from "mongoose";
import { envsKeys } from "./envs.js";
import { logger } from "../utils/logs.js";

mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);
const MONGO_CONN_URL = envsKeys.MONGO_URI;

export const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    // Connecting to the database
    mongoose
      .connect(MONGO_CONN_URL, {})
      .then(() => {
        logger.info("Database connection established successfully!");
        resolve(); // Resolve promise on success
      })
      .catch((err) => {
        logger.info("Database connection error:", err);
        reject(err); // Reject promise on error
        logger(err);
      });

    // Handling connection events
    mongoose.connection.on("connected", () => {
      logger.info("Mongoose connected to the database.");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected from the database.");
    });

    mongoose.connection.on("disconnecting", () => {
      console.log("Mongoose is disconnecting from the database.");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Mongoose connection error:", err);
    });
  });
};
