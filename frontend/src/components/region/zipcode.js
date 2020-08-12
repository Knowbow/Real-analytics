import React from 'react';
import axios from "axios";

class PropertiesByZip extends React.Component {
    constructor(props){
    super(props);
        this.state = {
            data : []
        }
        this.componentDidMount()
        //this.renderProperties = this.renderProperties.bind(this);
    }
 

    componentDidMount() {
        
        axios({
           method: "GET",
           url: "https://realtor.p.rapidapi.com/properties/v2/list-sold",
           headers: {
             "content-type": "application/octet-stream",
             "x-rapidapi-host": "realtor.p.rapidapi.com",
             "x-rapidapi-key":
               "d43202b4b4mshbef69f1be58f837p1fae39jsn21118f85adc1",
             useQueryString: true,
           },
           params: {
             sort: "sold_date",
             city: "New York City",
             offset: "0",
             state_code: "NY",
             limit: "20",
             
           },
        }).then((response) =>{
           
            this.setState({
                data: response.data.properties
            })
            
        });
    }

    render(){
        //this.renderProperties();
        
        const properties = this.state.data

        if (properties.length>0){
        return (
          <div>
            There are `{properties.length}` properties!
            <ul>
              listing id: `
              {properties.map((property) => (
                <li>{property.property_id}</li>
              ))}
              ` bedrooms: `
              {properties.map((property) => (
                <li>{property.beds}</li>
              ))}
              `
            </ul>
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