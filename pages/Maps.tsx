
import { useEffect, useState } from "react";

import Head from "next/head";

const Maps = () => {
 
  const [coordinates, setCoordinates] = useState({});
 
  useEffect(() => {
    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);



  return (
  
  );
};

export default Maps;