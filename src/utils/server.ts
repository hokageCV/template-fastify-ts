import Fastify from "fastify";
import logger from "./logger";
import pokemonRoutes from "../modules/pokemon/pokemon.routes";
import indexRouteOptions from "./index.route";

async function buildServer() {
  const fastify = Fastify({
    logger,
  });

  //routes
  fastify.get("/", indexRouteOptions);
  fastify.register(pokemonRoutes, { prefix: "/pokemon" });
  return fastify;
}

export default buildServer;
