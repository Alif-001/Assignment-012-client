import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import bg44 from "./../../../images/notfound.png";

const bg = {
  marginTop: "1opx",
  backgroundImage: `url(${bg44})`,
  height: 500,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const NotFound = () => {
  return (
    <>
      <Navigation></Navigation>;<div style={bg}></div>
      <div style={{ margin: "20px" }}>
        <NavLink to="/home" style={{ textDecoration: "none" }}>
          <Button style={{ margin: "20px" }} variant="contained">
            Go to Home
          </Button>
        </NavLink>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
