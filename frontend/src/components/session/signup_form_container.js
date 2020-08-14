import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mstp = (state) => {
    return {
        signedIn: state.session.isAuthenticated,
        errors: state.errors
    };
};

const mdtp = (dispatch) => {
    return {
        signup: user => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(
    mstp,
    mdtp
)(SignupForm);