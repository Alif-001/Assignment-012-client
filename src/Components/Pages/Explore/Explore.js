import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import ExploreData from "./ExploreData/ExploreData";
import NewAdded from "./NewAdded/NewAdded";

const Explore = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const process = async () => {
      const response = await fetch(
        "https://rocky-refuge-44620.herokuapp.com/services"
      );
      const data = await response.json();
      setServices(data);
    };
    process();
  }, []);
  return (
    <div>
      <Navigation></Navigation>

      <Box style={{ margin: "30px" }} sx={{ flexGrow: 1, textAlign: "center" }}>
        <Container sx={{ m: 5 }}>
          <Typography
            sx={{ fontWeight: 600, m: 5 }}
            variant="h4"
            component="div"
          >
            Services we provide
          </Typography>{" "}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <ExploreData service={service} key={service._id}></ExploreData>
            ))}
          </Grid>
        </Container>
      </Box>
      <NewAdded></NewAdded>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
