import { combineReducers } from 'redux';
import session from './session_api_reducer';
import dataReducer from './zipcode_reducer';

const RootReducer = combineReducers({
    session,
    data: dataReducer
});

export default RootReducer;