import React from 'react';
import axios from "axios";
import PriceToRent from "../graphs/price_to_rent";
import PriceToBuy from '../graphs/price_to_buy';
import PricevsSqrft from '../graphs/price_sqrft';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, StreetViewPanorama } from "react-google-maps";
import GoogMapSale from '../google_map_sale';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';

class PropertiesByZip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saleProperties: [],
      rentProperties: [],
      isOpen: false,
      markerId: 1,
    }
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
    //this.renderProperties = this.renderProperties.bind(this);
  }

  googMap(properties) {

    const map = () => {
      const onClick = this.handleToggleOpen;

      return (
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{
            lat: parseFloat(properties[0].address.lat),
            lng: parseFloat(properties[0].address.lon),
          }}
        >
          {properties.map((marker, i) => {
            let id = 0;

            return (
              <Marker
                key={i}
                position={{ lat: parseFloat(marker.address.lat), lng: parseFloat(marker.address.lon) }}
                onClick={() => {
                  onClick();
                  this.setState({
                    markerId: i
                  });
                }}
              >
                
                {this.state.isOpen && this.state.markerId === i && (
                  <div className="showmap1">
                    <img className="image" src={marker.thumbnail} />
                    <div className="detailContainer">
                      <h1 className="details">Price:</h1>
                      <h1 className='details'>{marker.price}</h1>
                      <h1 className="details">Property type: {marker.prop_type}</h1>
                      <h1 className="details">Address: {marker.address.line}, {marker.address.city}</h1>
                    </div>
                    <div className="detailContainer">
                      <h1 className="details">Bedrooms: {marker.beds}</h1>
                      <h1 className="details">Bathrooms: {marker.baths} </h1>
                    </div>
                    
                    {marker.building_size && (
                      <div className="detailContainer">
                        <h1 className="details">Size: {marker.building_size.size} sqft</h1> 
                        <h1 className="details">Price/sqft: ${(marker.price / marker.building_size.size).toFixed(2)}</h1>
                    </div>
                    )}
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
      <div className="showmap" style={{ height: "500px", width: "500px" }}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAqVaZ_c7dTTiuDO7b5sjF22xqaWKpBuDI&callback=initMap`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    );
  }

  handleToggleOpen() {
    this.setState({
      isOpen: true,
    });
  }


  componentDidMount() {
    axios({
      method: "GET",
      url: "https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "01196eb35cmsh8dd8a853106467fp16cd9djsn16e974239b03",
        useQueryString: true,
      },
      params: {
        sort: "relevance",
        city: this.props.match.params.city,
        state_code: this.props.match.params.st,
        limit: "20",
        offset: "0",
        postal_code: this.props.match.params.zipcode,
      },
    }).then(response => {
      this.setState({
        saleProperties: response.data.properties
      })
    });

    axios({
      method: "GET",
      url: "https://realtor.p.rapidapi.com/properties/v2/list-for-rent",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "01196eb35cmsh8dd8a853106467fp16cd9djsn16e974239b03",
        useQueryString: true,
      },
      params: {
        sort: "relevance",
        city: this.props.match.params.city,
        state_code: this.props.match.params.st,
        limit: "7",
        offset: "0",
        postal_code: this.props.match.params.zipcode,
      },
    }).then(response => {
      this.setState({
        rentProperties: response.data.properties
      })
    });
  }


  render() {
    const data1 = [
      { name: "", year_built: 0 },
      { name: "", year_built: 0 },
      { name: "", year_built: 0 },
      { name: "", year_built: 0 },
      { name: "", year_built: 0 },
      { name: "", year_built: 0 },
      { name: "", year_built: 0 },
    ];
    const data2 = [
      { name: "", apt_sale_price: 0 },
      { name: "", apt_sale_price: 0 },
      { name: "", apt_sale_price: 0 },
      { name: "", apt_sale_price: 0 },
      { name: "", apt_sale_price: 0 },
      { name: "", apt_sale_price: 0 },
      { name: "", apt_sale_price: 0 },
    ];
    const data3 = [
      { name: "", price: 0, sqrft: 0 },
      { name: "", price: 0, sqrft: 0 },
      { name: "", price: 0, sqrft: 0 },
      { name: "", price: 0, sqrft: 0 },
      { name: "", price: 0, sqrft: 0 },
      { name: "", price: 0, sqrft: 0 },
      { name: "", price: 0, sqrft: 0 },
    ];

    if (this.state.saleProperties.length > 0 && this.state.rentProperties.length > 0) {

      const rentData = data1.map((datum, idx) => (
        datum = {
          name: this.state.rentProperties[idx].address.line,
          year_built: this.state.rentProperties[idx].year_built,
        }
      ))
      const saleData = data2.map((datum, idx) => (
        datum = {
          name: this.state.saleProperties[idx].address.line,
          apt_sale_price: this.state.saleProperties[idx].price,
        }
      ))
      const vsData = data3.map((datum, idx) => (
        datum = {
          name: this.state.saleProperties[idx].address.line,
          price: this.state.saleProperties[idx].price,
          sqrft: this.state.saleProperties[idx].building_size.size || 1
        }
      ))
      
      return (
        <div className="zipcodeContainer">
          <div>
            <div className="showcontainer">
            {this.googMap(this.state.saleProperties)}
            </div>
            <PriceToRent rentData={rentData} />
            <PriceToBuy saleData={saleData} />
            <PricevsSqrft vsData={vsData} />
          </div>
        </div>
      );

    }
    else {
      return (<div>
        No available properties
      </div>)
    }
  };
}

export default PropertiesByZip;
