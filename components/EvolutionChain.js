import * as React from "react";
import PokemonImg from "./PokemonImg";
import { useRouter } from "next/router";

export default function EvolutionChain({
  evolutionData,
  pokemonID,
  totalPokemon,
}) {
  const router = useRouter();
  return (
    <div
      className={
        evolutionData.chain.species.name === "eevee"
          ? "eevee evolution-chain"
          : "evolution-chain"
      }
    >
      <h2>Evolution Chain</h2>
      {evolutionData.chain.evolves_to.length > 0 && (
        <div
          className={
            pokemonID === evolutionData.chain.species.url.split("/")[6]
              ? "active pokemon-info"
              : "pokemon-info"
          }
          onClick={() => {
            if (pokemonID !== evolutionData.chain.species.url.split("/")[6]) {
              router.push({
                pathname: `/pokemon/${
                  evolutionData.chain.species.url.split("/")[6]
                }`,
                query: {
                  totalPokemon,
                },
              });
            }
          }}
        >
          <PokemonImg
            pokemonID={evolutionData.chain.species.url.split("/")[6]}
            pokemonName={evolutionData.chain.species.name}
          />
          <h3>{evolutionData.chain.species.name}</h3>
        </div>
      )}
      <div className="second-stage">
        {evolutionData.chain.evolves_to.map((secondStage, index) => {
          return (
            <div
              key={index}
              className={
                pokemonID === secondStage.species.url.split("/")[6]
                  ? "active pokemon-info"
                  : "pokemon-info"
              }
              onClick={() => {
                if (pokemonID !== secondStage.species.url.split("/")[6]) {
                  router.push({
                    pathname: `/pokemon/${
                      secondStage.species.url.split("/")[6]
                    }`,
                    query: {
                      totalPokemon,
                    },
                  });
                }
              }}
            >
              <PokemonImg
                pokemonID={secondStage.species.url.split("/")[6]}
                pokemonName={secondStage.species.name}
              />
              <h3>{secondStage.species.name}</h3>
            </div>
          );
        })}
      </div>
      {evolutionData.chain.evolves_to[0].evolves_to.length > 0 && (
        <div className="thirdStage">
          {evolutionData.chain.evolves_to.map((secondStage, index) => {
            return (
              <React.Fragment key={index}>
                {secondStage.evolves_to.length > 0 &&
                  secondStage.evolves_to.map((thirdStage, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          pokemonID === thirdStage.species.url.split("/")[6]
                            ? "active pokemon-info"
                            : "pokemon-info"
                        }
                        onClick={() => {
                          if (
                            pokemonID !== thirdStage.species.url.split("/")[6]
                          ) {
                            router.push({
                              pathname: `/pokemon/${
                                thirdStage.species.url.split("/")[6]
                              }`,
                              query: {
                                totalPokemon,
                              },
                            });
                          }
                        }}
                      >
                        <PokemonImg
                          pokemonID={thirdStage.species.url.split("/")[6]}
                          pokemonName={thirdStage.species.name}
                        />
                        <h3>{thirdStage.species.name}</h3>
                      </div>
                    );
                  })}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}
