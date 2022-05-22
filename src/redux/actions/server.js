import axios from 'axios';
import { API } from '../../Backend';

const api = axios.create({
    baseURL: API,
    headers: {
        "Content-type": 'application/json',
        Accept: "application/json"
    },
    withCredentials: true
})

export default api;