import { Button, Container, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Details = () => {
  const { id } = useParams();

  const [services, setServices] = useState([]);
  const { addToCart, allContexts } = useAuth();
  const { user } = allContexts;
  const { displayName, email, photoURL } = user;
  console.log(user);

  const { _id, title, details, img, rating, price } = services;

  useEffect(() => {
    fetch(`https://rocky-refuge-44620.herokuapp.com/details/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, [id]);
  console.log(services);

  return (
    <div className="">
      <Navigation />
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box sx={{ textAlign: "start", my: 5 }}>
                <Typography variant="h3" sx={{ my: 2 }}>
                  {title}{" "}
                </Typography>
                <img
                  style={{
                    borderRadius: "5px",
                  }}
                  src={img}
                  alt=""
                />
                <Typography variant="body2" sx={{ my: 2, width: "75%" }}>
                  {details}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ mt: 5 }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { mt: 5, width: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="Name"
                  type="data"
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue={displayName}
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue={email}
                />

                <TextField
                  id="filled-basic"
                  label="Photo"
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  defaultValue={photoURL}
                />
                <TextField
                  id="filled-basic"
                  type="number"
                  label="Phone"
                  variant="filled"
                />
                <TextField
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  id="filled-basic"
                  label="Address"
                  variant="filled"
                />
                <Button
                  onClick={() => addToCart(services)}
                  variant="contained"
                  color="success"
                  sx={{ my: 2, alignItems: "start" }}
                >
                  add to cart
                </Button>
                <Box sx={{ mb: 5 }}></Box>
                {/* <NavLink to="/explore" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ my: 2, alignItems: "start", ml: 2 }}
                  >
                    explore
                  </Button>
                </NavLink> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>{" "}
      <Footer />
    </div>
  );
};

export default Details;
