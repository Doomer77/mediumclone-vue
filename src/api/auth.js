import axios from '@/api/axios'

const register = (credential) => axios.post('/users', { user: credential })

const login = (credential) => axios.post('/users/login', { user: credential })

export default {
  register,
  login,
}
