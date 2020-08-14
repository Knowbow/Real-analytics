import React from 'react';
import axios from "axios";
import PriceToRent from "../graphs/price_to_rent";
import PriceToBuy from '../graphs/price_to_buy';
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
      { name: "Page A", pv: 24000 },
      { name: "Page B", pv: 1398, amt: 2210 },
      { name: "Page C", pv: 9800, amt: 2290 },
      { name: "Page D", pv: 3908, amt: 2000 },
      { name: "Page E", pv: 4800, amt: 2181 },
      { name: "Page F", pv: 3800, amt: 2500 },
      { name: "Page G", pv: 4300, amt: 2100 },
    ];
    const data2 = [
      { name: "Page A", pv: 2400, amt: 2400 },
      { name: "Page B", pv: 1398, amt: 2210 },
      { name: "Page C", pv: 9800, amt: 2290 },
      { name: "Page D", pv: 3908, amt: 2000 },
      { name: "Page E", pv: 4800, amt: 2181 },
      { name: "Page F", pv: 3800, amt: 2500 },
      { name: "Page G", pv: 4300, amt: 2100 },
    ];

    if (this.state.saleProperties.length > 0 && this.state.rentProperties.length > 0) {

      const rentData = data1.map((datum, idx) => (
        datum = {
          name: this.state.rentProperties[idx].address.line,
          pv: this.state.rentProperties[idx].year_built,
          amt: 2500
        }
      ))
      const saleData = data2.map((datum, idx) => (
        datum = {
          name: this.state.saleProperties[idx].address.line,
          pv: this.state.saleProperties[idx].price,
          amt: 2500
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
