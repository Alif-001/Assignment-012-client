import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch(`https://rocky-refuge-44620.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
      });
  }, []);
  return { services, setServices };
};

export default useServices;
