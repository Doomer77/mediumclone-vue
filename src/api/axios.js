import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BACKEND

export default axios
