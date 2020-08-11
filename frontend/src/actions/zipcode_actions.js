import * as APIUtil from '../util/api_util';

export const RECEIVE_ZIPCODE = 'RECEIVE_ZIPCODE';

export const receiveZipcode = data => ({
    type: RECEIVE_ZIPCODE,
    data,
    
})

export const fetchZipcode = zipcode => dispatch => {
    debugger
    return ( APIUtil.fetchForSale(zipcode).then(response => (
        dispatch(receiveZipcode(response))
    )) )
};