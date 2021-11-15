import { Button } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import useAuth from "../../../../../Hooks/useAuth";

const DashHomeItem = ({ add }) => {
  const [orders, setOrders] = useState();
  const [reload, setReload] = useState(true);
  const { _id, title, img, details, price, rating, userName, status, email } =
    add;
  const { allContexts } = useAuth();
  const { admin, user, logOut } = allContexts;

  function cancel(id) {
    const confirmation = window.confirm("Are you sure ");
    if (confirmation) {
      fetch(`https://rocky-refuge-44620.herokuapp.com/delete/${id}`, {
        method: "Delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount === 1) {
            const remainingOrders = orders.filter((order) => order?._id !== id);
            setOrders(remainingOrders);
          } else {
          }
        });
    }
    console.log("jksf", orders);
  }

  // function handleConfirm(id) {
  //   const confirmation = window.confirm("Are you sure ");
  //   if (confirmation) {
  //     fetch(`https://rocky-refuge-44620.herokuapp.com/confirmation/${id}`, {
  //       method: "PUT",
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.modifiedCount === 1) {
  //           setReload(false);
  //         }
  //       });
  //   }
  // }
  return (
    <TableRow>
      <TableCell align="center">
        <img width="100" height="50" src={img} alt="" />
      </TableCell>

      <TableCell align="left">{title}</TableCell>
      <TableCell align="left">$ {price}</TableCell>
      <TableCell align="left">{rating}</TableCell>
      <TableCell align="left">{userName}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{status}</TableCell>
      {/* {admin && (
        <Button
          onClick={() => handleConfirm(_id)}
          variant="contained"
          color="success"
        >
          Confirm
        </Button>
      )} */}
      <Button onClick={() => cancel(_id)} variant="contained" color="error">
        Delete
      </Button>
    </TableRow>
  );
};

export default DashHomeItem;
