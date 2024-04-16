import { BASE_URL } from "./base";

const getPokemon = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  return response.json();
};

const getPokemonSpecies = async (id) => {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
  return response.json();
};

const getAllPokemon = async () => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=1025&offset=0`);
  return response.json();
};

const generalFetch = async (apiURL) => {
  const response = await fetch(apiURL);
  return response.json();
};

export { getPokemon, getAllPokemon, getPokemonSpecies, generalFetch };
