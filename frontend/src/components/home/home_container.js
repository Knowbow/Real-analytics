import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import Home from './home';

const mstp = (state) => {
    return {
        zipCode: ""
    };
};

const mdtp = (dispatch) => {
    return {

    }
}

export default connect(
    mstp,
    mdtp
)(Home);