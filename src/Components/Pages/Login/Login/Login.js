import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import login from "../../../../images/login.png";

const Login = () => {
  const location = useLocation();
  const history = useHistory();

  const [loginData, setLoginData] = useState({});
  const { allContexts } = useAuth();
  const { user, loginUser, isLoading, signInWithGoogle, authError } =
    allContexts;
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
    // e.target.reset();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography sx={{ fontSize: 24 }} variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: 1, m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: 1, m: 1 }}
              id="standard-basic"
              name="password"
              onChange={handleOnChange}
              type="password"
              label="Your Password"
              variant="standard"
            />
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User ? Please Register</Button>
            </NavLink>
            <Button sx={{ width: 1, m: 1 }} type="submit" variant="contained">
              Login
            </Button>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">user created successfully </Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>

          <Button
            sx={{ width: 1, m: 1 }}
            onClick={handleGoogleSignIn}
            variant="contained"
            color="success"
          >
            Google Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
