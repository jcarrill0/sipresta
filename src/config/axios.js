import axios from 'axios';

const loanEndpoint = axios.create({
    // baseURL: 'https://60d2776c858b410017b2dccf.mockapi.io/api/'
    // baseURL: 'https://my-json-server.typicode.com/jcarrill0/test_loandb'
    baseURL: 'https://sipresta-d30f.restdb.io/rest/'
});

export default loanEndpoint;