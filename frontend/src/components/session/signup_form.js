import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

  renderErrors() {
    
    // if (this.props.errors.length>0) {
    // debugger
    return (
      // <span>{window.alert(`${this.props.errors[0]}`)}</span>
      <span>
        {Object.values(this.props.errors).map((error, i) => (
          <span key={`error-${i}`} variant="warning">
            {window.alert(`${error}`)}
          </span>
        ))}
      </span>
    );
    // }
  }



    render() {
        return (
          <div className="session">
            <div className="home-pic">
              <img
                className="r-pic"
                src="https://i.pinimg.com/originals/df/90/7f/df907ff72483dcee2370f294fc9f03dc.jpg"
              />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <br />
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                  className="session-form-sign"
                />
                <br />
                <input
                  type="text"
                  value={this.state.handle}
                  onChange={this.update("handle")}
                  placeholder="Handle"
                  className="session-form-sign"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                  className="session-form-sign"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password2}
                  onChange={this.update("password2")}
                  placeholder="Confirm Password"
                  className="session-form-sign"
                />
                <br />
                <input className="sessionbtn" type="submit" value="Submit" />
                {this.renderErrors()}
              </div>
            </form>
          </div>
       
    );
  }
}

export default withRouter(SignupForm);
