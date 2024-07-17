import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MediaCard from "../components/card";
import Navbar from "./Navbar";
import CharacterDetail from "../components/character";
import SearchAndLogo from "../components/searchAndLogo";
import FavoritePage from "../components/Favourite";
import '../CSS/characters.css';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const pageSize = 20; // Number of characters per page

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setCharacters(response.data.results);
        // Scroll to the top of the page when data updates
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [page]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchAndLogo />} />
        <Route
          path="/characters"
          element={
            <div className="cards-container">
              <Navbar />
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
              <div className="pagination-container">
                {page > 1 && ( // Render button only if page is greater than 1
                  <button onClick={() => setPage((prev) => prev - 1)}>
                    Prev Page
                  </button>
                )}
                <button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
              </div>
            </div>
          }
        />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/favourites" element={<><Navbar /><FavoritePage /></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Characters;
