// App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Characters from "./components/characters";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import FavoritePage from "./components/Favourite";
import { AuthProvider } from "./contexts/AuthContext"; // Adjust path as necessary
import Home from "./components/searchAndLogo";
import Character from "./components/character";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<Character />} />
            <Route path="/favourites" element={<FavoritePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;