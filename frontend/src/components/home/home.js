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

    render () {
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
                        <input type="submit" value="Search" />
                    </div>
                    <GoogMap />
                </form>
                
            </div>
        )
    }
}

export default Home