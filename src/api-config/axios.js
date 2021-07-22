import axios from 'axios';

const loanEndpoint = axios.create({
    // baseURL: '/api',
    // headers: {
    // }
    // baseURL: 'https://sipresta-d30f.restdb.io/rest'
    baseURL: 'https://sipresta-9c45e-default-rtdb.firebaseio.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default loanEndpoint;