import { Container, TableRow } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { default as React, useEffect, useState } from "react";
import useAuth from "../../../../../Hooks/useAuth";
import DashHomeItem from "../DashHomeItem/DashHomeItem";

const Dashhome = () => {
  const { allContexts } = useAuth();
  const { user } = allContexts;
  console.log(user);

  const [added, setAdded] = useState([]);
  useEffect(() => {
    fetch(`https://rocky-refuge-44620.herokuapp.com/services`)
      .then((response) => response.json())
      .then((data) => {
        setAdded(data);
      });
  }, [added, user.uid]);
  console.log(added);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Image</TableCell>
                      <TableCell align="left">Name</TableCell>

                      <TableCell align="left">Price</TableCell>
                      <TableCell align="left">Rating</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {added.map((add) => (
                      <DashHomeItem add={add} key={add._id}></DashHomeItem>
                    ))}{" "}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashhome;
