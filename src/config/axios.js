import axios from 'axios';

const loanEndpoint = axios.create({
    // baseURL: 'https://60d2776c858b410017b2dccf.mockapi.io/api/'
    // baseURL: 'https://sipresta-d30f.restdb.io/rest'
    baseURL: 'sipresta/v1/api'
});

export default loanEndpoint;