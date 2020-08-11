import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{
                lat: 40.7591704, lng: -74.0392709
            }} />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const GoogMap = () => {
    return (
        <div style={{ height: "500px", width: "500px" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBrp4640Vpt8W_tDu6ywctI4IotidQUDdM&callback=initMap`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div> 
    )
}

export default GoogMap