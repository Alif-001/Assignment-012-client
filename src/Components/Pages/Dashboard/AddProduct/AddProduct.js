import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
// import useAuth from "../../../Hooks/useAuth";

const AddProduct = () => {
  const { allContexts } = useAuth();
  const { user } = allContexts;

  const initialInfo = { name: user.displayName, description: "", rating: "" };
  const [newData, setNewData] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...newData };
    newInfo[field] = value;
    setNewData(newInfo);
    console.log(field, value);
  };

  console.log("sjkfario", newData);

  const handleButton = (e) => {
    const newDatas = { ...newData };

    fetch("https://rocky-refuge-44620.herokuapp.com/newadded", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDatas),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Data has been saved",
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
        Add Product
      </Typography>
      <form onSubmit={handleButton} style={{ width: "100%", height: "" }}>
        <div>
          <TextField
            sx={{ m: 1, width: "50%" }}
            id="title"
            label="Title"
            onBlur={handleOnBlur}
            name="title"
            type="text"
          />
          <br />
          <TextField
            sx={{ m: 1, width: "50%" }}
            id="title"
            label="Image-Link"
            onBlur={handleOnBlur}
            name="img"
            type="text"
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
            label="Rating"
            name="rating"
            onBlur={handleOnBlur}
            type="number"
            InputProps={{ inputProps: { min: 0, max: 5 } }}
          />
          <br />
          <TextField
            sx={{ m: 1, width: "50%" }}
            id="ratingkdl"
            label="Price"
            name="price"
            onBlur={handleOnBlur}
            type="number"
            // InputProps={{ inputProps: { min: 0, max: 5 } }}
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

export default AddProduct;
