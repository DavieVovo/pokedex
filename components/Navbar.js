import React from "react";
import Link from "next/link";

import PokemonSearch from "@/components/PokemonSearch";

export default function Navbar({ searchBool, onSearch, toggleSound }) {
  return (
    <nav>
      <div>
        <Link className="nav-title" href="/">
          Pokédex
        </Link>
        {searchBool == "true" && <PokemonSearch onSearch={onSearch} />}
      </div>
    </nav>
  );
}
