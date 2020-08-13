import { RECEIVE_ZIPCODE } from '../actions/zipcode_actions'

const dataReducer = (state={}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_ZIPCODE:
            return action.data
        default:
            return state;
    }

}

export default dataReducer;