import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MediaCard from "./card";
import Navbar from "./Navbar";
import CharacterDetail from "./character";
import Home from "./searchAndLogo";
import FavoritePage from "./Favourite";
import "../CSS/characters.css";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

const fetchCharacters = async (page: number) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  return response.data.results;
};

const Characters = () => {
  const [page, setPage] = React.useState<number>(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => fetchCharacters(page),
    staleTime: 5 * 1000,
  });

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="cards-container">
      <Navbar />
      {data?.map((character: Character) => (
        <div key={character.id} className="card-item">
          <MediaCard
            id={character.id}
            title={character.name}
            description={character.species}
            image={character.image}
          />
        </div>
      ))}
      <div className="pagination-container">
        {page > 1 && <button onClick={handlePrevPage}>Prev Page</button>}
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default Characters;
