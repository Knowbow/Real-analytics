import React from 'react';
import { Link } from 'react-router-dom'
import GoogMap from '../google_map'
import AddressSearchBar from '../address_search_bar'
import { Marker } from "react-google-maps";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: '',
            lat: 40.7826039,
            lng: -73.9506774,
            city: 'New York',
            st: 'New York'
        };
        this.updateLocInfo = this.updateLocInfo.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    updateLocInfo (data) {
        this.setState({
            zipCode: data.zipCode,
            lat: data.lat,
            lng: data.lng,
            city: data.city,
            st: data.st
        })


    }



    linkOptions() {
        if (this.state.zipCode === '') {
            return (<span> Please enter a Zip Code or Address</span>)
        } else {
            return (<Link to={`/zipcode/${this.state.zipCode}`} params={{ city: this.state.city, st: this.state.st }}>{`Details on ${this.state.zipCode}`}</Link>)
        }
    }

    render () {
        return (
            <div className="home">
                <div className="home-pic">
                    <img
                        className="r-pic"
                        src="https://i.pinimg.com/originals/df/90/7f/df907ff72483dcee2370f294fc9f03dc.jpg"
                    />
                </div>
                <AddressSearchBar updateData={this.updateLocInfo}/>
                <GoogMap lat={this.state.lat} lng={this.state.lng}>
                    
                </GoogMap>
                <div className='link' >{this.linkOptions(this.state.zipCode)}</div>
            </div>
        )
    }
}
export default Home