import { getPokemon, getRandomPokemon } from "./pokemon.controllers";

const pokeData = {
  name: { type: "string" },
  order: { type: "number" },
  types: { type: "array" },
  abilities: { type: "array" },
  base_experience: { type: "number" },
};
const pokeSchema = {
  response: {
    200: {
      type: "object",
      properties: {
        data: {
          type: "object",
          properties: pokeData,
        },
      },
    },
  },
};

export const randomPokemonOptions = {
  schema: pokeSchema,
  handler: getRandomPokemon,
};
export const pokemonOptions = {
  schema: pokeSchema,
  handler: getPokemon,
};
