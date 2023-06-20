import * as dotenv from "dotenv";
dotenv.config();

import logger from "./utils/logger";
import buildServer from "./utils/server";
import ENV from "./utils/env";

const PORT = parseInt(ENV.PORT, 10) || 3000;

async function main() {
  const app = await buildServer();

  app.listen({
    port: PORT,
  });
  logger.info(`Server is running on port ${PORT}`);
}

main();
