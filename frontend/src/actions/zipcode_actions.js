import { fetchForSale } from '../util/api_util';
import axios from "axios";
export const RECEIVE_ZIPCODE = 'RECEIVE_ZIPCODE';

export const receiveZipcode = data => {
    debugger
    return {
    type: RECEIVE_ZIPCODE,
    data
    }
}

export const fetchZipcode = zipcode => dispatch => { 
        axios({
          method: "GET",
          url: "https://realtor.p.rapidapi.com/properties/v2/list-for-rent",
          headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key":
              "3f2301a122msh17341c53c7b196cp15dc6cjsnc133e59b08b0",
            useQueryString: true,
          },
          params: {
            sort: "relevance",
            city: "New York City",
            state_code: "NY",
            limit: "2",
            offset: "0",
            postal_code: zipcode,
          },
        }).then((response) => dispatch(receiveZipcode(response)));

}
