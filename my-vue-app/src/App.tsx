import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useRoutes, Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import MediaCard from "./components/card";
import CharacterDetail from "./components/character";
import SearchAndLogo from "./components/searchAndLogo";
import "./CSS/characters.css";
import FavoritePage from "./components/Favourite";
import Login from "./auth/login";
import Register from "./auth/Register";
import Header from "./auth/Header";
import Home from "./home/index";
import { AuthProvider, useAuth } from "./Contexts/authContext";



interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

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
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<SearchAndLogo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/characters"
              element={
                <ProtectedRoute>
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
                </ProtectedRoute>
              }
            />
            <Route
              path="/character/:id"
              element={
                <ProtectedRoute>
                  <CharacterDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favourites"
              element={
                <ProtectedRoute>
                  <FavoritePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
