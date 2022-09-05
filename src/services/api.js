import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omega-form-back.herokuapp.com'
});

export default api;