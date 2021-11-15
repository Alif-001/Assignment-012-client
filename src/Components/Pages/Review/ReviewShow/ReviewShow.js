import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewShow = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const process = async () => {
      const response = await fetch(
        "https://rocky-refuge-44620.herokuapp.com/review"
      );
      const data = await response.json();
      setReviews(data);
    };
    process();
  }, []);
  console.log(reviews);

  return (
    <Container style={{ marginBottom: "30px" }}>
      <Typography variant="h4" style={{ margin: "30px" }}>
        Reviews
      </Typography>
      <Box sx={{ flexGrow: 1, my: 5 }}>
        <Grid container spacing={2}>
          {reviews.map((review) => (
            <ReviewCard review={review} key={review._id}></ReviewCard>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ReviewShow;
