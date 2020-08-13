import {connect} from 'react-redux';
import PropertiesByZip from './zipcode';
import { fetchZipcode } from '../../actions/zipcode_actions';

const mapStateToProps = (state) => {
    return {
       properties: state.data.data,
    }
};

const mapDispatchToProps = dispatch => ({
    fetchForSale: zipcode => dispatch(fetchZipcode(zipcode))
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesByZip);