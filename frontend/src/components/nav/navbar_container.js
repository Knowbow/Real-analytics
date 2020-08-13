import { connect } from 'react-redux';
import { logout, clearErrors } from '../../actions/session_actions';
import NavBar from './navbar';

const mstp = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        errors: state.session.errors
    };
};

const mdtp = (dispatch) => {
    return {
      logout: () => dispatch(logout()),
      clearErrors: () => dispatch(clearErrors()),
    };
}

export default connect(
    mstp,
    mdtp
)(NavBar);