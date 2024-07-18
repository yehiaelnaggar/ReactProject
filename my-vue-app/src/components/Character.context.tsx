// src/context/CharacterContext.tsx

import React from "react";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

interface CharacterContextType {
  characters: Character[];
  fetchCharacters: () => void;
}

const defaultValue: CharacterContextType = {
  characters: [],
  fetchCharacters: () => {},
};

const CharacterContext = React.createContext<CharacterContextType>(defaultValue);

export default CharacterContext;
