function normalizePokemonName(pokemonName) {
  //   let mainName = "";
  const splitName = (name) => {
    const parts = name.split("-");
    const baseName = parts[0];
    let variation = "";

    if (parts.length > 1) {
      variation = parts.slice(1).join(" ");
    } else {
      variation = "";
    }

    return [baseName, variation];
  };

  let [mainName, variation] = splitName(pokemonName);

  switch (variation) {
    case "hisui":
      pokemonName = mainName + "-hisuian";
      break;
    case "alola":
      pokemonName = mainName + "-alolan";
      break;
    case "galar":
      pokemonName = mainName + "-galarian";
      break;
    case "paldea":
      pokemonName = mainName + "-paldean";
      break;
    case "paldea combat breed":
      pokemonName = mainName + "-paldean-combat";
      break;
    case "paldea aqua breed":
      pokemonName = mainName + "-paldean-aqua";
      break;
    case "paldea blaze breed":
      pokemonName = mainName + "-paldean-blaze";
      break;
    case "galar standard":
      pokemonName = mainName + "-galarian-standard";
      break;
    case "galar zen":
      pokemonName = mainName + "-galarian-zen";
      break;
    case "10 power construct":
      pokemonName = mainName + "-10";
      break;
    case "gmax":
      pokemonName = mainName + "-gigantamax";
      break;
    case "hearthflame mask":
      pokemonName = mainName + "-hearthflame";
      break;
    case "wellspring mask":
      pokemonName = mainName + "-wellspring";
      break;
    case "cornerstone mask":
      pokemonName = mainName + "-cornerstone";
      break;
    case "red":
      pokemonName = mainName + "-red-core";
      break;
    case "dusk":
      pokemonName = mainName + "-dusk-mane";
      break;
    case "dawn":
      pokemonName = mainName + "-dawn-wings";
      break;
    case "amped gmax":
      pokemonName = mainName + "-gigantamax";
      break;
    case "shadow":
      pokemonName = mainName + "-shadow-rider";
      break;
    case "ice":
      pokemonName = mainName + "-ice-rider";
      break;
    case "blue plumage":
      pokemonName = mainName + "-blue";
      break;
    case "yellow plumage":
      pokemonName = mainName + "-yellow";
      break;
    case "white plumage":
      pokemonName = mainName + "-white";
      break;
    case "single strike gmax":
      pokemonName = mainName + "-single-strike-gigantamax";
      break;
    case "rapid strike gmax":
      pokemonName = mainName + "-rapid-strike-gigantamax";
      break;
    default:
      break;
  }
  switch (pokemonName) {
    case "minior-red-meteor":
      pokemonName = "minior-meteor";
      break;
    case "mimikyu-disguised":
      pokemonName = "mimikyu";
      break;
    default:
      break;
  }
  return pokemonName;
}

function filterVariants(variants) {
  return variants.filter(
    (variant) =>
      !variant.pokemon.name.includes("totem") &&
      !variant.pokemon.name.includes("cap") &&
      !variant.pokemon.name.includes("starter") &&
      !variant.pokemon.name.includes("cosplay") &&
      !variant.pokemon.name.includes("libre") &&
      !variant.pokemon.name.includes("pop") &&
      !variant.pokemon.name.includes("belle") &&
      !variant.pokemon.name.includes("phd") &&
      !variant.pokemon.name.includes("rock-star") &&
      !variant.pokemon.name.includes("50-power-construct") &&
      variant.pokemon.name !== "zygarde-10" &&
      !variant.pokemon.name.includes("mode") &&
      !variant.pokemon.name.includes("build") &&
      !variant.pokemon.name.includes("pumpkaboo") &&
      !variant.pokemon.name.includes("gourgeist") &&
      !variant.pokemon.name.includes("battle-bond") &&
      !variant.pokemon.name.includes("orange-meteor") &&
      !variant.pokemon.name.includes("green-meteor") &&
      !variant.pokemon.name.includes("yellow-meteor") &&
      !variant.pokemon.name.includes("blue-meteor") &&
      !variant.pokemon.name.includes("indigo-meteor") &&
      !variant.pokemon.name.includes("violet-meteor") &&
      !variant.pokemon.name.includes("minior-orange") &&
      !variant.pokemon.name.includes("minior-green") &&
      !variant.pokemon.name.includes("minior-yellow") &&
      !variant.pokemon.name.includes("minior-blue") &&
      !variant.pokemon.name.includes("minior-indigo") &&
      !variant.pokemon.name.includes("minior-violet") &&
      !variant.pokemon.name.includes("gulping") &&
      !variant.pokemon.name.includes("gorging") &&
      !variant.pokemon.name.includes("low-key-g") &&
      !variant.pokemon.name.includes("hangry") &&
      !variant.pokemon.name.includes("zarude")
  );
}

export { normalizePokemonName, filterVariants };
