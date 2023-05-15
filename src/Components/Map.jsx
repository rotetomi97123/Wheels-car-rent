import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import './Map.css'

const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBrXOVoqy_eq3yK-R3PoGRMyLjIpAF_wAM",
    });
    if(!isLoaded) return <div>Loading...</div>
  return <Map2 />
}
function Map2() {
    const center = useMemo(()=>({lat: 44.7866, lng: 20.4489}),[]);

    return  <GoogleMap center={center} zoom={16} mapContainerClassName='map-container' >
        <MarkerF position={center} />
    </GoogleMap>
}

export default Map