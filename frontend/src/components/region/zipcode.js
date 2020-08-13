import React from 'react';
import axios from "axios";
import PriceToRent from "../graphs/price_to_rent";
import PriceToBuy from '../graphs/price_to_buy';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, StreetViewPanorama } from "react-google-maps";

class PropertiesByZip extends React.Component {
    constructor(props){
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
          defaultZoom={15}
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
                  <div>
                    <img src={marker.thumbnail} />
                    <h1>Price: {marker.price}</h1>
                    <h1>Property id: {marker.property_id}</h1>
                    
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
             "x-rapidapi-key":
               "3f2301a122msh17341c53c7b196cp15dc6cjsnc133e59b08b0",
             useQueryString: true,
           },
           params: {
             sort: "relevance",
             city: "New York City",
             state_code: "NY",
             limit: "7",
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
             "x-rapidapi-key":
               "3f2301a122msh17341c53c7b196cp15dc6cjsnc133e59b08b0",
             useQueryString: true,
           },
           params: {
             sort: "relevance",
             city: "New York City",
             state_code: "NY",
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

      if ( this.state.saleProperties.length>0 && this.state.rentProperties.length>0) {
        
        const rentData = data1.map((datum,idx) => (
          datum = { name: this.state.rentProperties[idx].address.line, 
                    pv: this.state.rentProperties[idx].community.price_max,
                    amt:2500 }
        ))
        const saleData = data2.map((datum,idx) => (
          datum = { name: this.state.saleProperties[idx].address.line, 
                    pv: this.state.saleProperties[idx].price,
                    amt:2500 }
        ))
        debugger
        return (
          <div>
            <div>
              {this.googMap(this.state.saleProperties)}
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