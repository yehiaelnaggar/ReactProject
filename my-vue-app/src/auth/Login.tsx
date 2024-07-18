import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  Container,
  FormControlLabel,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("/");
      } catch {
        setError("Failed to log in");
      }

      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{
              "& .MuiInputBase-input": {
                color: "gray",
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            sx={{
              "& .MuiInputBase-input": {
                color: "gray",
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "gray",
                },
              },
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={passwordRef}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container justifyContent="center">
            {/* <Grid item xs>
              <Link to="#">Forgot password?</Link>
            </Grid> */}
            <Grid item>
              <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
