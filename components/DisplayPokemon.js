import React from "react";

import PokemonListItem from "./PokemonListItem";
export default function DisplayPokemon({
  pokemons,
  totalPokemon,
  pokemonNamesArray,
}) {
  return (
    <div className="pokemon-grid-container">
      {pokemons && pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <PokemonListItem
            key={pokemon.url}
            pokemon={pokemon}
            totalPokemon={totalPokemon}
            pokemonNamesArray={pokemonNamesArray}
          />
        ))
      ) : (
        <div>Pokemon not found</div>
      )}
    </div>
  );
}
