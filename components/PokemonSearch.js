import React, { useState } from "react";

export default function PokemonSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
    </div>
  );
}
