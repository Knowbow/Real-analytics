import React from 'react';
import { Alert } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

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

    this.props.login(user).then(() => this.props.history.push("/home"));
  }

  renderErrors() {
    debugger;
    // if (this.props.errors.length>0) {
    return (
      // <span>{window.alert(`${this.props.errors[0]}`)}</span>
      <span>
        {Object.values(this.state.errors).map((error, i) => (
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
              // onClick={() => this.renderErrors()}
              type="submit"
              value="Submit"
            />

            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
