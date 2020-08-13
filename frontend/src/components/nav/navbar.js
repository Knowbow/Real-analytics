import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout()
        
    }

    destroyErrors() {
        this.props.clearErrors();
    }

    getLinks() {
        
        if (this.props.loggedIn) {
            return (
                <div className='navbar'>

                    <Link className="btn1" to={`/home`} >Real Analytics</Link>

                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
              <div className="navbar">
                  <Link className="btn1" to={"/signup"}>
                    Signup
                  </Link>
                  <Link className="btn" to={"/login"}>
                    Login
                  </Link>
              </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.getLinks()}
            </div>
        );
    }
}



export default NavBar;