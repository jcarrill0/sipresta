import axios from 'axios';

const loanEndpoint = axios.create({
    baseURL: 'https://sipresta-d30f.restdb.io/rest/',
    headers:{
        'content-type': "application/json",
        'x-apikey': 'def0c1cbd6845e2a78517b34f815349a1ff23',
        'cache-control': 'no-cache'
    }
    // baseURL: 'https://60d2776c858b410017b2dccf.mockapi.io/api/'
    // baseURL: 'https://my-json-server.typicode.com/jcarrill0/test_loandb'
});

export default loanEndpoint;