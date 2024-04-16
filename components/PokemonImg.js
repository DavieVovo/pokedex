export default function PokemonImg({ pokemonID, pokemonName }) {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`}
      alt={`Pokemon: ${pokemonName}`}
      loading="lazy"
    />
  );
}
