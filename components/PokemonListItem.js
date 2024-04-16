import { useRouter } from "next/router";

import PokemonImg from "./PokemonImg";
import PokeballIcon from "./PokeballIcon";

export default function PokemonListItem({ pokemon, totalPokemon }) {
  const router = useRouter();
  const pokemonID = pokemon.url.split("/")[6];

  return (
    <div
      className="pokemon-container"
      onClick={() => {
        router.push({
          pathname: `/pokemon/${pokemonID}`,
          query: {
            totalPokemon,
          },
        });
      }}
    >
      <PokeballIcon />
      <p className="pokemon-number">#{pokemonID}</p>
      <div className="pokemon-img-container">
        <PokemonImg pokemonID={pokemonID} pokemonName={pokemon.name} />
      </div>
      <p className="pokemon-name">{pokemon.name.replace("-", " ")}</p>
    </div>
  );
}
