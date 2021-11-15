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
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../../../Hooks/useAuth";
import login from "../../../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { allContexts } = useAuth();
  const { user, registerUser, isLoading, authError } = allContexts;

  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("password did not match");
      return;
    }

    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
    // e.target.reset();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                name="password"
                onBlur={handleOnBlur}
                type="password"
                label="Your Password"
                variant="standard"
              />
              <TextField
                sx={{ width: 1, m: 1 }}
                id="standard-basic"
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                label="Retype Your Password"
                variant="standard"
              />
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Register ? Please Login</Button>
              </NavLink>
              <Button sx={{ width: 1, m: 1 }} type="submit" variant="contained">
                Register
              </Button>
            </form>
          )}

          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">user created successfully </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
