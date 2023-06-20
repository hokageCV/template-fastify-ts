import fastify from "fastify";
import logger from "./logger";

async function buildServer() {
  const app = fastify({
    logger,
  });

  return app;
}

export default buildServer;
