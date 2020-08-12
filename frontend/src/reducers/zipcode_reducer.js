import { RECEIVE_ZIPCODE } from '../actions/zipcode_actions'

const zipcodeReducer = (state={}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_ZIPCODE:
            return action.data;
        default:
            return state;
    }

}

export default zipcodeReducer;