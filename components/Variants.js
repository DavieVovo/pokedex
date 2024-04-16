import { useRouter } from "next/router";

import PokemonImg from "./PokemonImg";

export default function Variants({ variants, totalPokemon, isShiny }) {
  const router = useRouter();

  return (
    <div className="variants">
      <h2>Variants</h2>
      {variants.map((variant, index) => {
        const variantID = variant.pokemon.url.split("/")[6];
        const variantName = variant.pokemon.name
          .replace(/[-\s]/g, " ")
          .split(" ");
        let variantType;
        let pokemonName;
        const mainName = variantName[0];
        if (variantName.length > 1) {
          variantType = variantName.slice(1).join(" ");
        }
        switch (variantType) {
          case "hisui":
            pokemonName = "hisuian " + mainName;
            break;
          case "alola":
            pokemonName = "Alolan " + mainName;
            break;
          case "galar":
            pokemonName = "galarian " + mainName;
            break;
          case "paldea":
            pokemonName = "paldean " + mainName;
            break;
          case "paldea combat breed":
            pokemonName = "paldean combat " + mainName;
            break;
          case "mega":
            pokemonName = variantType + mainName;
            break;
          case "mega x":
            pokemonName = "mega " + mainName + " x";
            break;
          case "mega y":
            pokemonName = "mega " + mainName + " y";
            break;
          case "paldea aqua breed":
            pokemonName = "paldean aqua " + mainName;
            break;
          case "paldea blaze breed":
            pokemonName = "paldean blaze " + mainName;
            break;
          case "galar standard":
            pokemonName = "galarian " + mainName;
            break;
          case "galar zen":
            pokemonName = "galarian " + " zen mode";
            break;
          case "10 power construct":
            pokemonName = "Zygarde 10";
            break;
          case "gmax":
            pokemonName = "gigantamax " + mainName;
            break; // Don't forget to add break statements to each case
          default:
            pokemonName = mainName + " " + variantType;
            break;
        }
        return (
          <div
            key={index}
            className="pokemon-info"
            onClick={() => {
              router.push({
                pathname: `/variant/${variantID}`,
                query: {
                  totalPokemon,
                  isShiny,
                },
              });
            }}
          >
            <PokemonImg
              pokemonID={variantID}
              pokemonName={variant.pokemon.name}
            />
            <h3>{pokemonName}</h3>
          </div>
        );
      })}
    </div>
  );
}
