import React from "react";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";

export default function AddressSearchBar(props) {
    const [address, setAddress] = React.useState("");

    function extractZipCode(results) {
        let address_components = results[0].address_components
        const zip = address_components.find((address_component) => address_component.types[0] === "postal_code").long_name
        return zip
    }

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        const zip = extractZipCode(results)
        props.updateData({ zipCode: zip, lat: latLng.lat, lng: latLng.lng})
    };

    return (
        <div className='search'>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect} >
                {({ getInputProps }) => (
                    <div>
                        <input {...getInputProps({ placeholder: "Type address and press enter to search" })} />
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}