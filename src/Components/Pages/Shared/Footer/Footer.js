import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        style={{ marginTop: "20px" }}
        sx={{ flexGrow: 1, backgroundColor: "#1976d2", color: "white", mt: 5 }}
      >
        <Grid container spacing={3}>
          <Grid item xs>
            <div
              style={{
                textDecoration: "none",
                textAlign: "start",
                padding: "20px",
                fontWeight: "bold",
              }}
            >
              <h4>Contact us</h4>
              <div>
                <ul style={{ listStyle: "none" }}>
                  <li>Email: dervctrl@email.com</li>
                  <li>Phone: 50829720074</li>
                  <li>FaceBook</li>
                  <li>Youtube</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sx={{ my: "auto", textAlign: "center" }}>
            <h2>DRIVECTRL</h2>
          </Grid>
          <Grid item xs>
            <div
              style={{
                textDecoration: "none",
                textAlign: "start",
                padding: "50px",
                fontWeight: "bold",
              }}
            >
              <h4>Links</h4>
              <div>
                <ul style={{ listStyle: "none" }}>
                  <li>Home</li>
                  <li>Explore</li>
                  <li>About Us</li>
                  <li>Review us</li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
