import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'


const GoogMap = (props) => {
    const map = () => {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{
                    lat: props.lat, lng: props.lng
                }}
                 >
                    <Marker position={{ lat: props.lat, lng: props.lng }}></Marker>
                 </GoogleMap>
        )
    }

    const WrappedMap = (withGoogleMap(map))


    return (
      <div className="home-map">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAqVaZ_c7dTTiuDO7b5sjF22xqaWKpBuDI`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
}

export default GoogMap