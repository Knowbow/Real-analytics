import React from 'react';

class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: this.props.errors
        }
    }

    flushErrors() {
        this.setState({
            errors: []
        })
    }

    renderErrors() {
        if (this.props.errors) {
            return (
            <ul>
                {Object.values(this.props.errors).map((error, i) => (
                    <li key={`error-${i}`}>{window.alert(`${error}`)}</li>
                ))}
            </ul>
            ) 
        } else {
            return (
                <></>
            )
        }
    }

    render() {
        return(
            <ul>
                {this.renderErrors()}
                {this.flushErrors()}
            </ul>
        )
    }
     
}

export default ErrorHandler;