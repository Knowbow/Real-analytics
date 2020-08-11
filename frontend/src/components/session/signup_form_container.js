import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mstp = (state) => {
    return {
        signedIn: state.session.isAuthenticated,
        errors: state.session.errors
    };
};

const mdtp = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user))
    }
}

export default connect(
    mstp,
    mdtp
)(SignupForm);