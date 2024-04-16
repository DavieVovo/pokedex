import { normalizePokemonName } from "@/utils/variantNameFilters";

export default function PokemonHomeImg({ pokemonName, isVariant, isShiny }) {
  pokemonName = normalizePokemonName(pokemonName);

  return (
    <img
      src={
        isShiny
          ? `https://img.pokemondb.net/sprites/home/shiny/${pokemonName}.png`
          : `https://img.pokemondb.net/sprites/home/normal/${pokemonName}.png`
      }
      alt={`Pokemon: ${pokemonName}`}
      loading="lazy"
    />
  );
}
