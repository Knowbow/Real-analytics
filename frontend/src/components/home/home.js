import React from 'react';
import { Link } from 'react-router-dom'
import GoogMap from '../google_map'
import AddressSearchBar from '../address_search_bar'




class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zipCode: '',
            lat: 40.7826039,
            lng: -73.9506774
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
            lng: data.lng
        })
    }



    linkOptions() {
        if (this.state.zipCode === '') {
            return (<div>Please enter a Zip Code or Address</div>)
        } else {
            return (<div><Link to={`/zipcode/${this.state.zipCode}`}>{`Details on ${this.state.zipCode}`}</Link></div>)
        }
    }

    render () {
        return (
            <div className="home">
                <div>{this.state.zipCode}</div>
                <AddressSearchBar updateData={this.updateLocInfo}/>
                <GoogMap lat={this.state.lat} lng={this.state.lng}/>
                {this.linkOptions(this.state.zipCode)}
            </div>
        )
    }
}

export default Home