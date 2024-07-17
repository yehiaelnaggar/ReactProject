// src/components/CharacterDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/CharacterDetail.css"; // Import CSS file
import Navbar from "./Navbar";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: { name: string };
}

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.error("Error fetching character data:", error);
      });
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-detail-container">
      <Navbar />
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-details">
        <h1>{character.name}</h1>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <p>
          <strong>Origin:</strong> {character.origin.name}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetail;
