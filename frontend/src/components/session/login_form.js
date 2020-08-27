import React from 'react';
import { Alert } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors();
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
      password: this.state.password,
    };

    this.props.login(user);
  }


  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    let user = {
      email: "test@test.com",
      password: "testPassword"
    };

    this.props.login(user)
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
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
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
              className="sessionbtn"
              type="submit"
              value="Submit"
            />
            <button className="sessionbtn" onClick={this.demoLogin}>Demo Login</button>
            {this.renderErrors()}
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
