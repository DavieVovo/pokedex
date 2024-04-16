import React from "react";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { generateGradient } from "@/utils/generateGradient";
import { filterVariants } from "@/utils/variantNameFilters";

import Navbar from "@/components/Navbar";
import PokeballIcon from "@/components/PokeballIcon";
import Footer from "@/components/Footer";
import PokemonDetailName from "@/components/PokemonDetailName";
import PokemonDetailImage from "@/components/pokemonDetailImage";
import PokemonDetails from "@/components/PokemonDetails";

import {
  getPokemonSpecies,
  getPokemon,
  generalFetch,
} from "@/utils/api/pokemon";

export default function PokemonDetailPage() {
  const router = useRouter();
  const { pokemonID } = router.query;
  const { totalPokemon } = router.query;
  const { isShiny: initialShinyState } = router.query;

  const [pokemon, setPokemon] = useState();
  const [pokemonSpecies, setPokemonSpecies] = useState();
  const [types, setTypes] = useState();
  const [flavorText, setFlavorText] = useState();
  const [baseStats, setBaseStats] = useState();
  const [variants, setVariants] = useState();
  const [evolutionChain, setEvolutionChain] = useState();
  const [isShiny, setIsShiny] = useState(false);

  let gradient;

  useEffect(() => {
    const loadPokemon = async () => {
      const pokeData = await getPokemon(pokemonID);
      const speciesData = await getPokemonSpecies(pokemonID);
      const evolutionData = await generalFetch(speciesData.evolution_chain.url);
      setPokemon(pokeData);
      setPokemonSpecies(speciesData);
      setEvolutionChain(evolutionData);
      const types = pokeData.types.map((item) => item.type.name);
      const englishFlavorTexts = speciesData.flavor_text_entries.filter(
        (entry) => entry.language.name === "en"
      );
      setTypes(types);
      document.title = "Pokedex | " + pokeData.name.toUpperCase();
      setFlavorText(englishFlavorTexts);
      const filteredVariants = filterVariants(speciesData.varieties.slice(1));
      setVariants(filteredVariants);
      setBaseStats(
        pokeData.stats.reduce((acc, stat) => {
          acc[stat.stat.name] = stat.base_stat;
          return acc;
        }, {})
      );
    };

    if (!pokemonID) {
      return;
    }
    loadPokemon();
  }, [pokemonID]);

  const handleShinyToggle = () => {
    setIsShiny((prevIsShiny) => !prevIsShiny);
  };

  if (types) {
    gradient = generateGradient(types);
  }

  if (!pokemon || !pokemonID) {
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
            pokemonName={pokemon.name}
            pokemonID={pokemonID}
            linkTo="/"
            isShiny={isShiny}
            toggleShiny={handleShinyToggle}
          />
          <PokemonDetailImage
            pokemonName={pokemon.name}
            pokemonID={pokemonID}
            totalPokemon={totalPokemon}
            isShiny={isShiny}
          />
          <PokemonDetails
            pokemonID={pokemonID}
            totalPokemon={totalPokemon}
            variants={variants}
            evolutionChain={evolutionChain}
            types={types}
            pokemon={pokemon}
            baseStats={baseStats}
            flavorText={flavorText}
            isShiny={isShiny}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
