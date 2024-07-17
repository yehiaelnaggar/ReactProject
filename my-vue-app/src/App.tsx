// src/App.tsx
import React, { useEffect, useState, } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


import axios from "axios";
import Navbar from "./components/Navbar";
import MediaCard from "./components/card";
import CharacterDetail from "./components/character";
import SearchAndLogo from "./components/searchAndLogo"; // Importing the SearchAndLogo component
import "./CSS/characters.css";
import FavoritePage from "./components/Favourite";





interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

const App = () => {
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
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<SearchAndLogo />} />
          <Route
            path="/characters"
            element={
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
            }
          />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favourites" element={<FavoritePage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
