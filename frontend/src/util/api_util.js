import axios from "axios";

export const fetchForSale = zipcode => {

    axios({
        method: "GET",
        url: "https://realtor.p.rapidapi.com/properties/v2/list-sold",
        headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "realtor.p.rapidapi.com",
            "x-rapidapi-key": "d43202b4b4mshbef69f1be58f837p1fae39jsn21118f85adc1",
            useQueryString: true,
        },
        params: {
            sort: "sold_date",
            city: "New York City",
            offset: "0",
            state_code: "NY",
            limit: "200",
        },
    })
  
}