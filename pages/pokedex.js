import { useState, useEffect } from "react";

import { getAllPokemon } from "@/utils/api/pokemon";

import Navbar from "@/components/Navbar";
import DisplayPokemon from "@/components/DisplayPokemon";
import Footer from "@/components/Footer";

export default function Home() {
  const [allPokemonData, setAllPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const [filteredPokemonData, setFilteredPokemonData] = useState([]);
  const [pokemonNamesArray, setPokemonNamesArray] = useState([]);

  useEffect(() => {
    loadPokemon();
    document.title = "Pokedex";
  }, []);

  const loadPokemon = async () => {
    const data = await getAllPokemon();
    setAllPokemon(data.results);

    const namesArray = data.results.map((item) => item.name);
    setPokemonNamesArray(namesArray);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!isNaN(query) && query.trim() !== "") {
      const pokemonNumber = parseInt(query);
      const pokemon = allPokemonData.find((pokemon) =>
        pokemon.url.includes(`/${pokemonNumber}/`)
      );
      const filteredData = pokemon ? [pokemon] : [];
      setFilteredPokemonData(filteredData);
    } else {
      const filteredData = allPokemonData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPokemonData(filteredData);
    }
  };

  if (!allPokemonData) {
    return (
      <>
        <Navbar />
        <p class="loading">Loading...</p>
      </>
    );
  }

  return (
    <>
      <Navbar onSearch={handleSearch} searchBool={"true"} />
      <main>
        <div className="container">
          <div style={{ backgroundColor: "white", borderRadius: 5 }}>
            {searchQuery ? (
              <DisplayPokemon
                pokemons={filteredPokemonData}
                totalPokemon={allPokemonData.length}
                pokemonNamesArray={pokemonNamesArray}
              />
            ) : (
              <DisplayPokemon
                pokemons={allPokemonData}
                totalPokemon={allPokemonData.length}
                pokemonNamesArray={pokemonNamesArray}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
