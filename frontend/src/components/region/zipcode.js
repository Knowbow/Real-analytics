import React from 'react';
import axios from "axios";
import PriceToRent from "../graphs/price_to_rent";
import PriceToBuy from '../graphs/price_to_buy';

class PropertiesByZip extends React.Component {
    constructor(props){
    super(props);
        this.state = {
           saleProperties: [],
           rentProperties: []
        }
       
        //this.renderProperties = this.renderProperties.bind(this);
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