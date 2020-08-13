import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        if (nextProps.currentUser === true) {
            this.props.history.push('/home');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user).then(() => this.props.history.push('/home'));
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
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
                <input className="sessionbtn" type="submit" value="Submit" />
                {this.renderErrors()}
              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(LoginForm);
