// src/components/CharacterDetail.tsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
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

const fetchCharacter = async (id: string) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.data;
};

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: character,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id!),
    staleTime: 5 * 1000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="character-detail-container">
      <Navbar />
      {character && (
        <>
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
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
