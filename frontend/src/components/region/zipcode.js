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
      saleAverage: 40000,
      sqftAverage: 400
    }
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
    this.averageSale = this.averageSale.bind(this);
    this.averageSqft = this.averageSqft.bind(this);
    //this.renderProperties = this.renderProperties.bind(this);
  }
  averageSale(){
    var total = 0;
    for (var i = 0; i < this.state.saleProperties.length; i++) {
      total += this.state.saleProperties[i].price;
    }
    var avg = total / this.state.saleProperties.length;
    this.setState({
      saleAverage: avg,
    });
  }
  averageSqft() {
    var total = 0;
    var count =0;
    for (var i = 0; i < this.state.saleProperties.length; i++) {
      if(this.state.saleProperties[i].building_size)
      total += this.state.saleProperties[i].price/this.state.saleProperties[i].building_size.size;
      count +=1;
    }
    var avg = total / count;
    this.setState({
      sqftAverage: avg,
    });
  }

  googMap(properties) {

    const map = () => {
      const onClick = this.handleToggleOpen;
      const saleavg = this.averageSale;
      const salesqft = this.averageSqft;
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
                  saleavg();
                  salesqft();
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
                      <h1 className='details1'>{marker.price}</h1>
                      <h1 className="details">Average price in community:</h1>
                      <h1 className="details1">${this.state.saleAverage.toFixed(2)}</h1>
                      <h1 className="details">Address: </h1>
                      <h1 className='details1'>{marker.address.line}, {marker.address.city}</h1>
                    </div>
                    <div className="detailContainer">
                      <h1 className="details">Bedrooms:</h1>
                      <h1 className="details1">{marker.beds}</h1>
                      <h1 className="details">Bathrooms:</h1>
                      <h1 className="details1">{marker.baths}</h1>
                      <h1 className="details">Property type: </h1>
                      <h1 className='details1'>{marker.prop_type}</h1>
                    </div>
                    
                    {marker.building_size && (
                      <div className="detailContainer">
                        <h1 className="details">Size:</h1> 
                        <h1 className="details1">{marker.building_size.size} sqft</h1> 
                        <h1 className="details">Price/sqft:</h1>
                        <h1 className="details1">${(marker.price / marker.building_size.size).toFixed(2)}</h1>   
                        <h1 className="details">Average price/sqft in community:</h1>
                        <h1 className="details1">${this.state.sqftAverage.toFixed(2)}</h1>
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
      { name: "", priceBysqrft: 0 },
      { name: "", priceBysqrft: 0 },
      { name: "", priceBysqrft: 0 },
      { name: "", priceBysqrft: 0 },
      { name: "", priceBysqrft: 0 },
      { name: "", priceBysqrft: 0 },
      { name: "", priceBysqrft: 0 },
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
      const vsData = data3.map((datum, idx) => {
        if (this.state.saleProperties[idx].building_size.size === undefined ) {
          return datum = {
            name: this.state.saleProperties[idx].address.line,
            priceBysqrft: this.state.saleProperties[idx].price / this.state.sqrft.avg
        } 
        }
        return datum = {
          name: this.state.saleProperties[idx].address.line,
          priceBy: this.state.saleProperties[idx].price / this.state.saleProperties[idx].building_size.size
        }
      })
      
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
