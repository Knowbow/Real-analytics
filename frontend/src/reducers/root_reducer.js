import { combineReducers } from 'redux';
import session from './session_api_reducer';
import zipcode from './zipcode_reducer';

const RootReducer = combineReducers({
    session,
    zipcode
});

export default RootReducer;