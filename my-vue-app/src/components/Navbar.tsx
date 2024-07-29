import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed" color="warning" sx={{backgroundColor:'#00b5cc'}}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Main
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" color="info" sx={{ marginRight: 2, backgroundColor:'#b2df28' }}   onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            variant="contained"
            color="info"
            sx={{  marginRight: 2,backgroundColor:'#b2df28' }}
            onClick={() => navigate("/characters")}
          >
            characters
          </Button>
          <Button
            variant="contained"
            color="info"
            sx={{ backgroundColor:'#b2df28' }}
            onClick={() => navigate("/favourites")}
          >
            Favourits
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default App;
