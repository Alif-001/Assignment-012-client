import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
  const { allContexts } = useAuth();
  const { user } = allContexts;

  const initialInfo = { name: user.displayName, description: "", rating: "" };
  const [reviewData, setReviewData] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...reviewData };
    newInfo[field] = value;
    setReviewData(newInfo);
    console.log(field, value);
  };

  console.log("sjkfario", reviewData);

  const handleButton = (e) => {
    const newReview = { ...reviewData };

    fetch("https://rocky-refuge-44620.herokuapp.com/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your review has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
        console.log(data);
      });

    e.preventDefault();
  };

  return (
    <Grid container spacing={2}>
      <Typography variant="h3" sx={{ mx: "auto", my: 4 }}>
        Add Review
      </Typography>
      <form onSubmit={handleButton} style={{ width: "100%", height: "" }}>
        <div>
          <TextField
            sx={{ m: 1, width: "50%" }}
            id="title"
            label="Name"
            onBlur={handleOnBlur}
            name="name"
            type="text"
            defaultValue={user?.displayName}
          />
          <br />
          <TextField
            sx={{ m: 1, width: "50%" }}
            name="description"
            id="details"
            onBlur={handleOnBlur}
            label="Details"
          />
          <br />
          <TextField
            sx={{ m: 1, width: "50%" }}
            id="ratingkdl"
            label="rating"
            name="rating"
            onBlur={handleOnBlur}
            type="number"
            InputProps={{ inputProps: { min: 0, max: 5 } }}
          />
          <br />

          <Button sx={{ m: 1, width: "50%" }} variant="contained" type="submit">
            Add
          </Button>
        </div>
      </form>
    </Grid>
  );
};

export default Review;

// <form onSubmit={handleButton} style={{ width: "100%", height: "" }}>
//         <div>
//           <TextField
//             sx={{ m: 1, width: "50%" }}
//             id="title"
//             label="Title"
//             type="text"
//           />
//           <br />
//           <TextField sx={{ m: 1, width: "50%" }} id="details" label="Details" />
//           <br />
//           <TextField
//             sx={{ m: 1, width: "50%" }}
//             id="rating"
//             label="rating"
//             type="number"
//           />
//           <br />
//           <TextField sx={{ m: 1, width: "50%" }} id="img" label="Img-Link" />
//           <br />
//           <TextField
//             sx={{ m: 1, width: "50%" }}
//             id="outlined-helperText"
//             label="Price"
//           />
//           <br />
//           <Button sx={{ m: 1, width: "50%" }} variant="contained" type="submit">
//             Add
//           </Button>
//         </div>
//       </form>
