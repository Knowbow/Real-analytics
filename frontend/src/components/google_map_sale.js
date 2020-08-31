import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, StreetViewPanorama } from "react-google-maps";

const GoogMapSale = (props) => {

    const map = () => {
        let click = 0;
        let id=100;
        const onClick = ids => {
            click = 1;
            id=ids;
        }
        return (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{
                    lat: parseFloat(props.properties[0].address.lat),
                    lng: parseFloat(props.properties[0].address.lon),
                }}
            >
                {props.properties.map((marker, i) => {
                    let id = 0;

                    return (
                        <Marker
                            key={i}
                            position={{ lat: parseFloat(marker.address.lat), lng: parseFloat(marker.address.lon) }}
                            onClick={() => {
                                onClick(i);
                                
                            }}
                        >
                            {click===1 && id === i && (
                                <div>
                                    <p>hi</p>

                                </div>
                            )}

                        </Marker>
                    );
                })}
            </GoogleMap>
        );
    };

    const WrappedMap = withScriptjs(withGoogleMap(map));
    return (
        <div style={{ height: "500px", width: "500px" }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBrp4640Vpt8W_tDu6ywctI4IotidQUDdM&callback=initMap`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    );
}

export default GoogMapSale
