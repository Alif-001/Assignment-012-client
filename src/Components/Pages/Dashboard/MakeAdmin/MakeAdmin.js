import { Alert, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e) => {
    const user = { email };

    fetch("https://rocky-refuge-44620.herokuapp.com/users/admin", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          e.target.reset();

          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h1>Create Admin</h1>
      <form onSubmit={handleOnSubmit}>
        <TextField
          sx={{ width: "50%", my: 5 }}
          type="email"
          onBlur={handleOnBlur}
          label="Email"
          variant="filled"
        />
        <br />

        <Button type="submit" variant="contained" color="success">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made admin successfully </Alert>}
    </div>
  );
};

export default MakeAdmin;
