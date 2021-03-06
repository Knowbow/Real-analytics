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
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
        errors: []
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


    
    this.props.signup(user, this.props.history).then(() => this.attemptLogin())
  }

  attemptLogin() {
    let loginUser = {
      email: this.state.email,
      password: this.state.password,
    }

    if (this.state.errors.length === 0){
      this.props.login(loginUser)
    }



  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session">
        <div className="home-pic">
          <img
            className="r-pic"
            src="https://i.pinimg.com/originals/df/90/7f/df907ff72483dcee2370f294fc9f03dc.jpg"
            alt=''
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
