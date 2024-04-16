import PokemonImg from "./PokemonImg";
import { useRouter } from "next/router";

export default function OriginalForm({ originalPokemon, totalPokemon, isShiny }) {
  const router = useRouter();
  return (
    <div className="original-form">
      <h2>Base Form</h2>
      <div
        className="pokemon-info"
        onClick={() => {
          router.push({
            pathname: `/pokemon/${originalPokemon.url.split("/")[6]}`,
            query: {
              totalPokemon,
              isShiny
            },
          });
        }}
      >
        <PokemonImg
          pokemonID={originalPokemon.url.split("/")[6]}
          pokemonName={originalPokemon.name}
        />
      </div>
    </div>
  );
}
