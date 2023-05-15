import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Map.css';
import dotenv from 'dotenv';

dotenv.config();

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map2 />;
};

function Map2() {
  const center = useMemo(() => ({ lat: 44.7866, lng: 20.4489 }), []);

  return (
    <GoogleMap center={center} zoom={16} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Map;