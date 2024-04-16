import { typeColors } from "./typeColors ";

const generateGradient = (types) => {
  if (types.length === 1) {
    return typeColors[types[0]] || "#000000";
  }
  const [type1, type2] = types;
  const color1 = typeColors[type1] || "#000000";
  const color2 = typeColors[type2] || "#000000";
  return `linear-gradient(90deg, ${color1}, ${color2})`;
};

export { generateGradient };
