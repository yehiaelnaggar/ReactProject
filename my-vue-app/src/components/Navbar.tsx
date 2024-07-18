import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const { logout } = useAuth();

  const getTitle = (path: string) => {
    switch (true) {
      case path === "/characters":
        return "Characters";
      case path === "/favourites":
        return "Favorites";
      case path.startsWith("/character/"):
        return "Character Details";
      default:
        return "Main";
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="warning"
        sx={{ backgroundColor: "#272727" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            {getTitle(location.pathname)}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {location.pathname !== "/" && (
            <Button
              variant="contained"
              color="info"
              sx={{ marginRight: 2, backgroundColor: "#00b5cc" }}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
          )}
          {location.pathname !== "/characters" && (
            <Button
              variant="contained"
              color="info"
              sx={{ marginRight: 2, backgroundColor: "#00b5cc" }}
              onClick={() => navigate("/characters")}
            >
              Characters
            </Button>
          )}
          {location.pathname !== "/favourites" && (
            <Button
              variant="contained"
              color="info"
              sx={{ marginRight: 2, backgroundColor: "#00b5cc" }}
              onClick={() => navigate("/favourites")}
            >
              Favorites
            </Button>
          )}
          <Button
            variant="contained"
            color="info"
            sx={{ backgroundColor: "#00b5cc" }}
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default App;
