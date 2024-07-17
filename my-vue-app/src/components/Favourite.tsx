// src/pages/FavoritePage.tsx

import React, { useEffect, useState } from 'react';
import MediaCard from '../components/card'; // Adjust path as necessary
import Navbar from './Navbar';
import '../CSS/Favourite.css'; // Adjust path as necessary

interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
}

const FavoritePage = () => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Fetch favorite characters from local storage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteCharacters') || '[]');
    setFavoriteCharacters(storedFavorites);
  }, []);

  const removeFromFavorites = (id: number) => {
    // Remove a character from favorites
    const updatedFavorites = favoriteCharacters.filter((character) => character.id !== id);
    setFavoriteCharacters(updatedFavorites);
    // Update local storage
    localStorage.setItem('favoriteCharacters', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <Navbar />
      <div className="favorites-header">
        {/* <h2 className="favorites-title">Favorite Characters</h2> */}
      </div>
      <div className="favorites-list">
        {favoriteCharacters.length > 0 ? (
          favoriteCharacters.map((character) => (
            <div key={character.id} className="favorite-item">
              <MediaCard
                id={character.id}
                title={character.name}
                description={character.species}
                image={character.image}
              />
              <button className="remove-button" onClick={() => removeFromFavorites(character.id)}>
                Remove from Favorites
              </button>
            </div>
          ))
        ) : (
          <p style={{ fontFamily: 'Roboto, sans-serif', color: '#ffffff', fontSize: '1.5rem' }}>
            No favorite characters yet
          </p>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
