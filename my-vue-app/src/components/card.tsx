// src/components/MediaCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
}

const MediaCard: React.FC<Props> = ({ id, title, description, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${id}`);
  };

  const handleFavorite = (character: any) => {
    let favoriteCharacters = JSON.parse(
      localStorage.getItem("favoriteCharacters") || "[]"
    );

    if (!favoriteCharacters.find((c: any) => c.id === character.id)) {
      favoriteCharacters = [...favoriteCharacters, character];

      localStorage.setItem(
        "favoriteCharacters",
        JSON.stringify(favoriteCharacters)
      );

      alert(`Added ${character.title} to favorites!`);
    } else {
      alert(`${character.title} is already in favorites!`);
    }
  };

  return (
    <Card
      className="MuiCard-root"
      sx={{ backgroundColor: "var(--light-gray)" }}
    >
      <CardMedia sx={{ height: 180 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ backgroundColor: "#b2df28", color: "white" }}
          onClick={() => handleFavorite({ id, title, description,image })}
        >
          Add to Favorites
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "#b2df28", color: "white" }}
          onClick={handleClick}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
