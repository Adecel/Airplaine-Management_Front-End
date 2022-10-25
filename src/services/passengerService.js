import axios from "axios";

export const passengerService = {
  getListPassengers
};

function getListPassengers(params) {
  return axios
    .get(`https://mmt-web.herokuapp.com/api/task`, {})
    .then((response) => {Promise.resolve(response.data)
        console.log(response.data)
    }
  
    
    )
    .catch((error) => Promise.reject(error.response));
}