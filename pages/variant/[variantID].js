import React from "react";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { generateGradient } from "@/utils/generateGradient";

import Navbar from "@/components/Navbar";
import PokeballIcon from "@/components/PokeballIcon";
import Footer from "@/components/Footer";
import PokemonDetailName from "@/components/PokemonDetailName";
import PokemonDetailImage from "@/components/pokemonDetailImage";
import PokemonDetails from "@/components/PokemonDetails";

import { getPokemon } from "@/utils/api/pokemon";

export default function VariantDetailPage() {
  const router = useRouter();
  const { variantID } = router.query;
  const { totalPokemon } = router.query;

  const [pokemon, setPokemon] = useState();
  const [baseStats, setBaseStats] = useState();
  const [types, setTypes] = useState();
  const [isShiny, setIsShiny] = useState(false);

  let gradient;

  useEffect(() => {
    const loadPokemon = async () => {
      const pokeData = await getPokemon(variantID);
      setPokemon(pokeData);

      document.title =
        "Pokedex | " + pokeData.name.toUpperCase().replace("-", " ");
      const types = pokeData.types.map((item) => item.type.name);
      setTypes(types);

      setBaseStats(
        pokeData.stats.reduce((acc, stat) => {
          acc[stat.stat.name] = stat.base_stat;
          return acc;
        }, {})
      );
    };

    if (!variantID) {
      return;
    }
    loadPokemon();
  }, [variantID]);

  const handleShinyToggle = () => {
    if (variantID != 10277) setIsShiny((prevIsShiny) => !prevIsShiny);
  };

  if (types) {
    gradient = generateGradient(types);
  }

  if (!pokemon || !variantID) {
    return (
      <>
        <Navbar />
        <p>loading...</p>
      </>
    );
  }

  return (
    <>
      <Navbar searchBool={"false"} />
      <main
        className="details"
        style={gradient ? { background: gradient } : null}
      >
        <PokeballIcon />
        <div className="container">
          <PokemonDetailName
            pokemonID={variantID}
            pokemonName={pokemon.name}
            originalID={pokemon.species.url.split("/")[6]}
            isVariant="true"
            totalPokemon={totalPokemon}
            isShiny={isShiny}
            toggleShiny={handleShinyToggle}
          />
          <PokemonDetailImage
            pokemonID={variantID}
            pokemonName={pokemon.name}
            isVariant="true"
            totalPokemon={totalPokemon}
            isShiny={isShiny}
          />
          <PokemonDetails
            pokemonID={variantID}
            totalPokemon={totalPokemon}
            types={types}
            pokemon={pokemon}
            baseStats={baseStats}
            originalPokemon={pokemon.species}
            isVariant="true"
            isShiny={isShiny}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
