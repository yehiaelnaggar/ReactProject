import { Link } from "react-router-dom";
import SearchBar2 from "./searchBar2"; // Adjust path as necessary
import Button from "./button"; // Adjust path as necessary
import logo from "../assets/Rick-And-Morty-Logo.svg";
import "../CSS/searchAndLogo.css";
import FavoritePage from "./Favourite";

const Home = () => {
  const handleFavorites = (character: any) => {
    let favoriteCharacters = JSON.parse(
      localStorage.getItem("favoriteCharacters") || "[]"
    );
    if (!favoriteCharacters.find((c: any) => c.id === character.id)) {
      favoriteCharacters = [...favoriteCharacters, character];
      localStorage.setItem(
        "favoriteCharacters",
        JSON.stringify(favoriteCharacters)
      );
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Rick and Morty Logo" />
      </div>
      <div>
        <SearchBar2 />
      </div>
      <div className="button-container">
        <Link to="/characters">
          <Button text="Characters" />
        </Link>
        <Link to="/episodes">
          <Button text="Episodes" />
        </Link>
        <Link to="/favourites">
          {" "}
          {}
          <Button text="Favorites" />
        </Link>
      </div>
      <div className="paragraph-container">
        <p style={{ fontFamily: "Roboto, sans-serif" }}>
          Rick and Morty is an American adult animated science fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network's
          nighttime programming block Adult Swim. The series follows the
          misadventures of Rick Sanchez, a cynical mad scientist, and his
          good-hearted but fretful grandson Morty Smith, who split their time
          between domestic life and interdimensional adventures that take place
          across an infinite number of realities, often traveling to other
          planets and dimensions through portals and on Rick's flying saucer.
          The general concept of Rick and Morty relies on two conflicting
          scenarios: domestic family drama and a misanthropic grandfather
          dragging his grandson into hijinks.
        </p>
      </div>
    </div>
  );
};

export default Home;
