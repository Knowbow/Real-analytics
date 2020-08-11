import React from 'react';
import axios from "axios";

class PropertiesByZip extends React.Component {
    constructor(props){
    super(props);
        this.state = {
            data : 'default'
        }
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
             limit: "200",
             
           },
        }).then((response) =>{
            debugger
            this.setState({
                data: response.data.properties
            })
            debugger
        });
    }

    render(){
        const properties = this.state.data
debugger
        return (
        <div>zipcode
            
        </div>
    )};
}

export default PropertiesByZip;