import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useFirebase from "./useFirebase";

const useCart = () => {
  const [selectedService, setSelectedServices] = useState([]);

  const { user } = useFirebase();

  const { uid, displayName, email } = user;
  console.log(uid);

  useEffect(() => {
    fetch(`https://rocky-refuge-44620.herokuapp.com/cart/${uid}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setSelectedServices(data);
        }
      });
  }, [uid]);

  function addToCart(services) {
    const isHave = selectedService.find(
      (selected) => selected._id === services._id
    );
    delete services._id;
    services.uid = uid;
    services.userName = displayName;
    services.status = "pending";
    services.email = email;

    if (isHave) {
      Swal.fire({
        title: "Product has been selected",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        timer: 9000,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      fetch(`https://rocky-refuge-44620.herokuapp.com/selected/add`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(services),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const newSelection = [...selectedService, services];
            setSelectedServices(newSelection);
          }
        });
    }

    console.log(selectedService);
  }

  function remove(_id) {
    fetch(`https://rocky-refuge-44620.herokuapp.com/delete/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const selectAfterRemove = selectedService.filter(
            (selected) => selected._id !== _id
          );
          setSelectedServices(selectAfterRemove);
          console.log(selectAfterRemove);
        } else {
          alert("something went wrong!!");
        }
      });
  }

  return { addToCart, remove };
};

export default useCart;
