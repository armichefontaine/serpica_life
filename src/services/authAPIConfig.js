import axios from 'axios'

const authApi = axios.create({
    ///baseURL: 'http://localhost:3001/api'
    baseURL: 'https://life-server.onrender.com/api',
})

export default authApi
