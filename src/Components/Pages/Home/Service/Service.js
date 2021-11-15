import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const Service = (props) => {
  const { img, title, details, rating, price, id, _id } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card
        sx={{
          maxWidth: 345,
          textAlign: "start",
          // maxHeight: 450,
          // minHeight: 450,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details.slice(0, 200)}...
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ mt: 3 }}
            >
              Price : $ {price}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "gold" }}
            >
              <Rating
                initialRating={rating}
                readonly
                emptySymbol={
                  <FontAwesomeIcon className="text-warning" icon={emptyStar} />
                }
                fullSymbol={
                  <FontAwesomeIcon className="text-warning" icon={fullStar} />
                }
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to={`/details/${_id}`} style={{ textDecoration: "none" }}>
            <BootstrapButton
              style={{ marginBottom: "10px" }}
              sx={{ mx: 1, mb: 4 }}
              variant="contained"
            >
              Purchases
            </BootstrapButton>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Service;
