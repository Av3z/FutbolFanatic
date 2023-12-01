import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.api-futebol.com.br/v1/",
    headers:{
        Authorization:
        "Bearer live_24db33e17b092ec91b5fdcfe74e9f4",
    }
});

export default api;