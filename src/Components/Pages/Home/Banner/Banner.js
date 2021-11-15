import { Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { NavLink } from "react-router-dom";
import bg from "../../../../images/bg.jpg";

const bannerBg = {
  background: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: 500,
  backgroundColor: "rgba(9, 11, 15, 0.6)",
  backgroundBlendMode: "darken,luminosity",
  backgroundAttachment: "fixed",
};

const verticalCenter = {
  display: "flex",
  height: 450,
  alignItems: "center",
};
const Banner = () => {
  return (
    <Container
      style={bannerBg}
      sx={{
        flexGrow: 1,
        mt: 2,
        width: "100vw",
      }}
      maxWidth=" false"
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{
            textAlign: "start",
            mx: 10,
          }}
        >
          <Typography
            variant="h2"
            sx={{ my: 5 }}
            style={{ color: "white", fontWeight: 300 }}
          >
            Choose From Close to a Million Used Cars
          </Typography>
          <Typography
            variant="h6"
            sx={{ my: 5 }}
            style={{ color: "white", fontSize: 24, fontWeight: 300 }}
          >
            Get access to our extensive selection of pre-owned vehicles for sale
            across the US, and see price ratings based on similar used car
            listings in your area, so you know when you’re getting a great deal.
          </Typography>
          <NavLink to="/explore" style={{ textDecoration: "none" }}>
            <Button variant="contained">Explore</Button>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
