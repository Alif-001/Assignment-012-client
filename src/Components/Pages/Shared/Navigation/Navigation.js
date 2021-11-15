import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { allContexts } = useAuth();
  const { user, logOut } = allContexts;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "start" }}
          >
            DRIVECTRL
          </Typography>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/home"
          >
            <Button color="inherit" variant="inherit">
              Home
            </Button>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/explore"
          >
            <Button color="inherit" variant="inherit">
              Explore
            </Button>
          </NavLink>

          {user?.email ? (
            <Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
                <Button color="inherit" variant="inherit">
                  Dashboard
                </Button>
              </NavLink>
              <Button onClick={logOut} color="inherit">
                Log Out
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
