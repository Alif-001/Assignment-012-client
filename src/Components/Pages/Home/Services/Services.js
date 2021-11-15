import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
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
    <Box sx={{ flexGrow: 1, textAlign: "center", m: 2 }}>
      <Container sx={{ mt: 5 }}>
        <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
          Top services we provide
        </Typography>{" "}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          {services.slice(0, 6).map((service) => (
            <Service service={service} key={service._id}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
