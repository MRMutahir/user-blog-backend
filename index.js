import { AuthRouter } from "./components/auth/authRoutes.js";

export const Routes = (app) => {
  app.get("/health", (req, res) => {
    return res.send("OK");
  });
  app.get("/", (req, res) => {
    res.send("SALAM World from Node.js app!");
  });

  app.use("/api/v1/auth", AuthRouter);
};
