import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};


const Map = ({ latitude, longitude, zoom }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // id: "liquid-sylph-339314",
    googleMapsApiKey: "AIzaSyClDGpur3KtYNHpABdDTVTiAsdHcrt5nuA",
  });

  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      zoom={zoom}
      mapContainerStyle={containerStyle}
      center={{
        lat: latitude,
        lng: longitude,
      }}
      // defaultCenter={{ lat: 37.9795, lng: 0, lon: 23.7162 }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={{
          lat: latitude,
          lng: longitude,
        }}
      />
      {/* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
  ) : (
    <></>
  );
};
export default React.memo(Map);
