import { FastifyInstance, FastifyPluginOptions } from "fastify";

import { randomPokemonOptions, pokemonOptions } from "./pokemon.options";

function pokemonRoutes(fastify: FastifyInstance, options: FastifyPluginOptions, done: () => void) {
  fastify.get("/", randomPokemonOptions);
  fastify.get("/:id", pokemonOptions);

  done();
}

export default pokemonRoutes;
