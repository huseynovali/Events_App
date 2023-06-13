import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

function MyComponent({ lat, lng }) {
  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "20px"
  };
  const center = {
    lat,
    lng
  };
  console.log(center);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.CONNECT_MAP,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
