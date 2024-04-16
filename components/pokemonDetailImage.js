import { useRouter } from "next/router";
import { useRef, useEffect } from "react";

import PokemonHomeImg from "./PokemonHomeImage";

export default function PokemonDetailImage({
  pokemonID,
  totalPokemon,
  pokemonName,
  isVariant = false,
  isShiny,
}) {
  const router = useRouter();
  const audioRef = useRef(null);
  const playAudio = () => {
    audioRef.current.play();
  };

  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play();
    };
  }, [pokemonID]);

  return (
    <div key={pokemonID}>
      {parseInt(pokemonID) > 1 && !isVariant && (
        <button
          onClick={() => {
            router.push({
              pathname: `/pokemon/${parseInt(pokemonID) - 1}`,
              query: {
                totalPokemon,
              },
            });
          }}
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="left-circle-1"
            className="icon glyph"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-3-3a1,1,0,0,1,0-1.42l3-3a1,1,0,0,1,1.42,1.42L11.41,12Z"
                style={{ fill: "#fff" }}
              ></path>
            </g>
          </svg>
        </button>
      )}
      {parseInt(pokemonID) == 1 && !isVariant && (
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="left-circle-1"
          className="icon glyph"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-3-3a1,1,0,0,1,0-1.42l3-3a1,1,0,0,1,1.42,1.42L11.41,12Z"
              style={{ fill: "#bbb" }}
            ></path>
          </g>
        </svg>
      )}
      <div onClick={playAudio}>
        <PokemonHomeImg
          pokemonName={pokemonName}
          isVariant={isVariant}
          isShiny={isShiny}
        />
      </div>
      {parseInt(pokemonID) < totalPokemon && (
        <button
          onClick={() => {
            router.push({
              pathname: `/pokemon/${parseInt(pokemonID) + 1}`,
              query: {
                totalPokemon,
              },
            });
          }}
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="right-circle"
            className="icon glyph"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.71,10.71-3,3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L12.59,12l-2.3-2.29a1,1,0,0,1,1.42-1.42l3,3A1,1,0,0,1,14.71,12.71Z"
                style={{ fill: "#fff" }}
              ></path>
            </g>
          </svg>
        </button>
      )}
      {parseInt(pokemonID) == totalPokemon && (
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          id="right-circle"
          className="icon glyph"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.71,10.71-3,3a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L12.59,12l-2.3-2.29a1,1,0,0,1,1.42-1.42l3,3A1,1,0,0,1,14.71,12.71Z"
              style={{ fill: "#fff" }}
            ></path>
          </g>
        </svg>
      )}
      <audio ref={audioRef} className="pokemon-cry">
        <source
          src={`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemonID}.ogg`}
          type="audio/ogg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
