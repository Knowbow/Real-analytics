import { combineReducers } from 'redux';
import sessionsReducer from './session_api_reducer';
import errorsReducer from './session_errors_reducer';
import dataReducer from './zipcode_reducer';

const RootReducer = combineReducers({
    session: sessionsReducer,
    errors: errorsReducer,
    data: dataReducer
});

export default RootReducer;