import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import tradeimg from "../../../../images/trade.png";

const tradeimg1 = {
  backgroundimage: `url(${tradeimg})`,
  height: 500,
};

const Tradeoffer = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={2} sx={{ my: 5, borderRadius: 1, border: 1 }}>
        <Grid item xs={6}>
          <img width="550" height="" src={tradeimg} alt="" />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "left" }}>
          <Typography variant="h4" sx={{ mt: 5 }}>
            Get a Trade-in Offer You Can Use Today
          </Typography>
          <Typography variant="body1" sx={{ my: 2, pr: 2 }}>
            Answer a few questions to see your car’s market value and get a cash
            offer in minutes. Cash out, or trade in for a new or used car.
          </Typography>
          <NavLink to="/explore" style={{ textDecoration: "none" }}>
            <Button variant="contained">Explore</Button>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tradeoffer;
