import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.2.101:3333', //ip do server
});

export default api;