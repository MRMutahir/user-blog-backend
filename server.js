import { envsKeys } from "./config/envs.js";
import { app } from "./app.js";
import { connectToDatabase } from "./config/db.js";
import { logger } from "./utils/logs.js";
import { Routes } from "./index.js";

Routes(app);
// Start the server
const PORT = envsKeys.PORT;
await connectToDatabase();
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
