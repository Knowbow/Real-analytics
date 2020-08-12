import React from 'react';
import { Link } from 'react-router-dom'
import GoogMap from '../google_map'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: '',
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    zipcodePageLink() {
        if (this.state.zipCode.length === 5) {
            return (<Link to={`/zipcode/${this.state.zipCode}`}>{`See Details for ${this.state.zipCode}`}</Link>)
        } else {
            return (<h3>Please Enter A Zip Code</h3>)
        }
    }
    render() {
        return (
            <div className="home">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text"
                            value={this.state.zipCode}
                            onChange={this.update('zipCode')}
                            placeholder="Zip Code"
                        />
                        <br />
                        {/* <input type="submit" value="Search" /> */}
                    </div>
                    <GoogMap />
                    {this.zipcodePageLink()}
                </form>
            </div>
        )
    }
}
export default Home