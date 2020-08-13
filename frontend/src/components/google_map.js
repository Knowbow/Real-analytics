import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


const GoogMap = (props) => {
    const map = () => {
        console.log(props)
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{
                    lat: props.lat, lng: props.lng
                }}
                 />
        )
    }

    const WrappedMap = withScriptjs(withGoogleMap(map))


    return (
        <div className='home-map'>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAqVaZ_c7dTTiuDO7b5sjF22xqaWKpBuDI`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div> 
    )
}

export default GoogMap