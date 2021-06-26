import axios from 'axios';

const loanEndpoint = axios.create({
    baseURL: 'https://sipresta-d30f.restdb.io/rest/',
    headers:{
        'content-type': "application/json",
        'x-apikey': 'def0c1cbd6845e2a78517b34f815349a1ff23',
        'cache-control': 'no-cache'
    }
    // baseURL: 'https://60d2776c858b410017b2dccf.mockapi.io/api/'
<<<<<<< HEAD
    // baseURL: 'https://sipresta-d30f.restdb.io/rest'
    baseURL: 'sipresta/v1/api'
=======
    // baseURL: 'https://my-json-server.typicode.com/jcarrill0/test_loandb'
>>>>>>> dec23d0baeb15ee6a1869b595820d385adb688fd
});

export default loanEndpoint;