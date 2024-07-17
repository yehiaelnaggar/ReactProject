// src/App.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "../components/card";
import "./characters.css";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="app-container">
      <div className="cards-container">
        {characters.map((character) => (
          <div key={character.id} className="card-item">
            <MediaCard
              id={character.id}
              title={character.name}
              description={character.species}
              image={character.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
