import axios from 'axios'

const api = axios.create({
    baseURL: 'https://crosslifeapi.herokuapp.com'
})


export default api;