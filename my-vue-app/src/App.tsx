import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
import CharacterProvider, { CharacterContext } from "./components/CharacterProvider";

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

const Characters: React.FC = () => {
  const { characters } = React.useContext(CharacterContext);

  return (
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
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <CharacterProvider>
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
                    <Characters />
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
      </CharacterProvider>
    </AuthProvider>
  );
};

export default App;
