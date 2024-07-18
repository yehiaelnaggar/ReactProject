// src/context/CharacterProvider.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterContext from "./Character.context";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characters, fetchCharacters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
