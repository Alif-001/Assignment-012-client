import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Rating from "react-rating";

const ReviewCard = ({ review }) => {
  const { name, description, rating } = review;
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 135,
          textAlign: "center",
        },
      }}
    >
      <Card elevation={3} sx={{ p: 5 }}>
        <Typography variant="h5" sx={{ m: 2 }}>
          {name}
        </Typography>
        <Typography variant="body1" sx={{ m: 2 }}>
          {description}
        </Typography>
        <Typography variant="body2" color="gold" sx={{ m: 2 }}>
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
      </Card>
    </Box>
  );
};

export default ReviewCard;
