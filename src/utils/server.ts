import fastify from "fastify";

async function buildServer() {
  const app = fastify({
    logger: true,
  });

  return app;
}

export default buildServer;
