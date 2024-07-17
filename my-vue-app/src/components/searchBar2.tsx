// src/components/SearchBar2.tsx
import React, { useState } from 'react';
import axios from 'axios';
import MediaCard from './card';
import '../CSS/searchBar2.css';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
}

export const SearchBar2 = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<Character[]>([]);

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      setSearchResults([]);
      return;
    }


    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchInput}`)
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setSearchResults([]);
      });
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search For A Character...."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search__button" onClick={handleSearch}>
          <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
      </div>

      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((character) => (
            <MediaCard
              key={character.id}
              id={character.id}
              title={character.name}
              description={character.species}
              image={character.image}
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default SearchBar2;
