import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import NewAddedItem from "./NewAddedItem/NewAddedItem";

const NewAdded = () => {
  const [newServices, setNewServices] = useState([]);

  useEffect(() => {
    const process = async () => {
      const response = await fetch(
        "https://rocky-refuge-44620.herokuapp.com/newadded"
      );
      const data = await response.json();
      setNewServices(data);
    };
    process();
  }, []);
  return (
    <div>
      <Box style={{ margin: "30px" }} sx={{ flexGrow: 1, textAlign: "center" }}>
        <Container sx={{ m: 5 }}>
          <Typography
            sx={{ fontWeight: 600, m: 5 }}
            variant="h4"
            component="div"
          ></Typography>{" "}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, sm: 8, md: 12 }}
          >
            {newServices.map((newService) => (
              <NewAddedItem
                newService={newService}
                key={newService._id}
              ></NewAddedItem>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default NewAdded;
