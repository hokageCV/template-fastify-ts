import { FastifyRequest, FastifyReply } from "fastify";
import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

async function fetchPokemonData(url: string) {
  try {
    const response = await axios.get(url);

    const reqData = {
      name: response.data.name,
      order: response.data.order,
      types: response.data.types.map((type: any) => type.type.name),
      abilities: response.data.abilities.map((ability: any) => ability.ability.name),
      base_experience: response.data.base_experience,
    };

    return reqData;
  } catch (err) {
    console.error(err);
  }
}

export async function getRandomPokemon(req: FastifyRequest, reply: FastifyReply) {
  let randomID = Math.floor(Math.random() * 1000) + 1;
  const url = `${baseURL}/${randomID}`;

  const reqData = await fetchPokemonData(url);

  return reply.send({ data: reqData });
}

export async function getPokemon(
  req: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = req.params;
  const url = `${baseURL}/${id}`;

  const reqData = await fetchPokemonData(url);

  return reply.send({ data: reqData });
}
