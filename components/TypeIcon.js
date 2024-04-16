import { typeColors } from "@/utils/typeColors ";

export default function TypeIcon({ pokemonsType }) {
  return (
    <div
      className={`${pokemonsType}-icon`}
      style={{
        background: `linear-gradient(125deg, ${typeColors[pokemonsType]}50, ${typeColors[pokemonsType]})`,
      }}
    >
      <p>{pokemonsType}</p>
    </div>
  );
}
